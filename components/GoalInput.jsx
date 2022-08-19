import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
const GoalInput = ({ addGoal, visible, closeModal }) => {
  const [goal, setGoal] = useState("");
  const handleChange = (text) => {
    setGoal(text);
  };

  const addGoalToList = () => {
    addGoal(goal);

    setGoal("");
    closeModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleChange}
          placeholder="add your goal"
          style={styles.input}
          value={goal}
        />
      </View>
      <View>
        <Button onPress={() => addGoalToList()} title="Add goal" />
        <Button title="Cancel" onPress={() => closeModal()} />
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 10,
    alignContent: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 2,
    padding: 10,
  },
});
