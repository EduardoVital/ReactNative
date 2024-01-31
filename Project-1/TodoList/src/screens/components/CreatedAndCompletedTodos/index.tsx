import React from "react";
import { View, Text } from "react-native";
import { styles } from "../CreatedAndCompletedTodos/styles";

type Props = {
  todos: {
    date: string;
    title: string;
    isCompleted: boolean;
  }[];
}

export function CreatedAndCompletedTodos({ todos }: Props) {
  const createdTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{createdTodos}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.completed}>Concluídas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{completedTodos}</Text>
        </View>
      </View>
    </View>
  )
}