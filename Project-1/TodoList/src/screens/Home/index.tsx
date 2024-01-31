import { View } from "react-native";
import { Header } from "../components/Header";
import { TodoInputForm } from "../components/TodoInputForm";
import { CreatedAndCompletedTodos } from "../components/CreatedAndCompletedTodos";
import { styles } from "./styles";
import { EmptyState } from "../components/EmptyState";
import { TodoList } from "../components/TodoList";
import { useState } from "react";

interface Todo {
  date: string;
  title: string;
  isCompleted: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = {
      date: new Date().toLocaleString(),
      title: text,
      isCompleted: false
    }

    setTodos([...todos, newTodo]);
  }

  const handleIsCompleted = (date: string) => {
    const newTodos = todos.map(todo => {
      if (todo.date === date) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }

      return todo;
    })

    setTodos(newTodos);
  }

  const handleDeleteTodo = (date: string) => {
    const newTodos = todos.filter(todo => todo.date !== date);

    setTodos(newTodos);
  }

  return (
    <View style={styles.container}>
      <Header />
      <TodoInputForm addTodo={handleAddTodo}/>
      <CreatedAndCompletedTodos todos={todos}/> 
      <TodoList todos={todos} setIsCompleted={handleIsCompleted} setDeleteTodo={handleDeleteTodo}/>
    </View>
  )
}