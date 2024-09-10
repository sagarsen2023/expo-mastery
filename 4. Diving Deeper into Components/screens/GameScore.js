import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const GameScore = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  function nextGuessHandler(direction) {
    if(currentGuess === userNumber){
      Alert.alert("Computer guessed successfully", "", )
      return;
    }
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <Text style={styles.opponentGuess}>{currentGuess}</Text>
        <View>
          <Text>Higher or lower?</Text>
          <View style={styles.buttonWrapper}>
            <PrimaryButton buttonContext={<Text>Lower</Text>} onPress={()=>{
              nextGuessHandler("lower")
            }}/>
            <PrimaryButton buttonContext={<Text>Higher</Text>} onPress={()=>{
              nextGuessHandler("higher")
            }}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScore;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  opponentGuess: {
    fontSize: 20,
    color: "white",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
});
