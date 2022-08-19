import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addGoal = (goal) => {
    setGoalsList((prevState) => [
      ...prevState,
      { text: goal, id: Math.random().toString() },
    ]);
    console.log(goal);
  };
  const deleteItem = (id) => {
    setGoalsList((prevState) =>
      prevState.filter((goal) => {
        return goal.id != id;
      })
    );
    console.log("deletd");
  };
  return (
    <View style={styles.container}>
      <GoalInput
        visible={showModal}
        addGoal={addGoal}
        closeModal={() => setShowModal(!showModal)}
      />
      <Button title="Add new goal" onPress={() => setShowModal(!showModal)} />
      <View style={styles.goals}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteItem={() => deleteItem(itemData.item.id)}
                goal={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  goals: {
    flex: 4,
  },
});
