import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

// Our first component
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// We mainly work with core components like View, Text, Button, Image, etc.
// Here styles are not being cascaded like in web development. We have to apply styles to each component separately.

export default function App() {
  const [goals, setGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
