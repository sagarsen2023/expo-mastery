import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

export default function GoalInput({ onAddGoal, isModalVisible, cancelGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goatInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={{
          width: 150,
          height: 150,
          marginBottom : 24
        }}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goatInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add Goal"
            onPress={() => {
              onAddGoal(enteredGoalText);
              cancelGoalHandler()
              setEnteredGoalText("");
            }}
          />
          <Button title="Cancel" color="red" onPress={cancelGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#5e0acc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  }
});
