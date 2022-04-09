import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import TaskList from "./component/TaskList";
import { TaskModel } from "./interface/Task";
import tw from "twrnc";
import { useState } from "react";
import { Modal } from "react-native-paper";
import TaskForm from "./component/TaskForm";

const tasksData: TaskModel[] = [
  {
    id: 1,
    title: "name",
    complete: true,
    description: "description",
    from: "1/1/2020",
    to: "2/2/2020",
  },
  {
    id: 2,
    title: "name",
    complete: true,
    description: "description",
    from: "1/4/2020",
    to: "2/6/2020",
  },
  {
    id: 3,
    title: "name",
    complete: true,
    description: "description",
    from: "1/5/2020",
    to: "2/9/2020",
  },
];

export default function App() {
  const [tasks, setTasks] = useState<TaskModel[]>(tasksData);
  const [modal, setModal] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TaskList tasks={tasks} />
      <Button
        onPress={() => {
          setModal(true);
        }}
        title="Add New"
      ></Button>
      <Modal visible={modal}>
        <TaskForm
          onAddTask={(newTask) => {
            setTasks([...tasks, newTask]);
            setModal(false);
          }}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
