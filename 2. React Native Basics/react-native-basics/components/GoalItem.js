import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, removeGoal, id }) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={removeGoal.bind(this, id)}
      style={({pressed})=> pressed && styles.pressedItem}
    >
      <View style={styles.goalItems}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem : {
    opacity: 0.5,
  }
});
