import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TaskModel } from "../interface/Task";

interface Props {
  onAddTask: (newTask: TaskModel) => void;
}

export default function TaskForm({ onAddTask }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = (data: TaskModel) => onAddTask(data);

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Text>Description</Text>

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />

      <Button
        title="Submit"
        onPress={handleSubmit<Partial<TaskModel>>(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "",
    padding: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid black",
    backgroundColor: "#faf",
    width: "100%",
    margin: "5px",
  },
});
