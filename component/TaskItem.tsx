import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TaskModel } from "../interface/Task";
import tw from "twrnc";
import { Checkbox } from "react-native-paper";

type Props = {
  task: TaskModel;
};

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <View style={styles.meta}>
          <Text style={styles.from}>{task.from}</Text>
          <Text style={styles.to}>{task.to}</Text>
        </View>
      </View>
      <View>
        <Checkbox
          disabled={false}
          status={task.complete ? "checked" : "unchecked"}
          // onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: "1px",

    color: "black",
    padding: "5px",
    width: "90vw",
    margin: "5px",
  },
  title: {
    fontWeight: "1000",
    fontSize: "20px",
  },
  meta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {},
  from: {},
  to: {},
});
