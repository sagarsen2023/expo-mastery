import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScore from "./screens/GameScore";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  return (
    <LinearGradient style={style.container} colors={["#f7b733", "#fc4a1a"]}>
      <SafeAreaView style={style.container}>
        <StatusBar style={style.androidSafeAreaView} />
        {userNumber ? (
          <GameScore userNumber={userNumber} />
        ) : (
          <StartGameScreen setUserNumber={setUserNumber} />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
