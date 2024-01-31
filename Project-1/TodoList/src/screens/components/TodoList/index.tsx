import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import TrashIcon from "../../../../assets/Trash.png";
import CheckIcon from "../../../../assets/Check.png";
import { styles } from "./styles";
import { EmptyState } from "../EmptyState";

type Props = {
  todos: {
    date: string;
    title: string;
    isCompleted: boolean;
  }[];
  setIsCompleted: (date: string) => void;
  setDeleteTodo: (date: string) => void;
}

export function TodoList({ todos, setIsCompleted, setDeleteTodo }: Props) {

  return (
    <View style={styles.container}>
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={styles.todoListWrapper}>
            <TouchableOpacity activeOpacity={1} onPress={() => setIsCompleted(item.date)}>
              <View style={item.isCompleted ? styles.checked : styles.checkbox}>
                {item.isCompleted && <Image source={CheckIcon} />}
              </View>
            </TouchableOpacity>
            <Text style={item.isCompleted ? styles.textChecked : styles.text}>{item.title}</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => setDeleteTodo(item.date)}>
              <Image source={TrashIcon}/>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState />
        )}
      />
    </View>
  )
} 