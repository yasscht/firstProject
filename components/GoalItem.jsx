import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = ({ goal, onDeleteItem }) => {
  return (
    <View>
      <Pressable android_ripple={{ color: "#dddddd" }} onPress={onDeleteItem}>
        <Text style={styles.goal}>{goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goal: {
    padding: 8,
    textAlign: "center",

    borderRadius: 21,
    backgroundColor: "#c5f",
    marginVertical: 6,
    color: "white",
  },
});
