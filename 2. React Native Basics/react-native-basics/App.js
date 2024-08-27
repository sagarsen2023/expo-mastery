import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

// Our first component
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// We mainly work with core components like View, Text, Button, Image, etc.
// Here styles are not being cascaded like in web development. We have to apply styles to each component separately.

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function removeGoalHandler(goalId) {
    console.log(goalId)
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  function cancelGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="white" onPress={()=>{
        setIsModalVisible(true);
      }}/>
      <GoalInput onAddGoal={addGoalHandler} isModalVisible={isModalVisible} cancelGoalHandler={cancelGoalHandler}/>
    
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              removeGoal={removeGoalHandler}
            />
          )}
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
    backgroundColor: "#f31282",
  },

  goalsContainer: {
    flex: 4,
  },
});
