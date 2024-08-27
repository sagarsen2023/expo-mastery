import {View, Text, StyleSheet } from "react-native";

function GoalItem({text}) {
  return (
    <View style={styles.goalItems}>
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
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
});
