import React from "react";
import { View } from "react-native";
import { TaskModel } from "../interface/Task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: TaskModel[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <View>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </View>
  );
}
