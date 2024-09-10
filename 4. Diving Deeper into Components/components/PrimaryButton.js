import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ buttonContext, onPress }) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        android_ripple={{
          color: "#72063c",
        }}
        style={({ pressed }) => [
          styles.innerButtonContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Text style={styles.textContent}>{buttonContext}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButtonContainer: {
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },
  innerButtonContainer: {
    backgroundColor: "#ddb52f",
    padding: 10,
    elevation: 20,
    shadowColor: "white",
    minWidth: "40%",
  },
  textContent: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  }
});
