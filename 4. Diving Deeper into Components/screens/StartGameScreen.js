import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({setUserNumber}) => {
  const [enteredValue, setEnteredValue] = useState("");

  function handleInput(value) {
    setEnteredValue(value);
  }

  function confirmInput() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.",
        [
            {
                text: "Reset",
                style: "destructive",
                onPress: () => setEnteredValue(""),
            },
            { text: "Okay", style: "default" },
        ]
      )
      return;
    }
    setUserNumber(chosenNumber); 
    setEnteredValue("");
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Start a New Game!</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInput}
          value={enteredValue}
        />
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            buttonContext="reset"
            onPress={() => {
              setEnteredValue("");
            }}
          />
          <PrimaryButton buttonContext="confirm" onPress={confirmInput} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#ddb52f",
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    backgroundColor: "black",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    elevation: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    minWidth: `20%`,
  },
});
