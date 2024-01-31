import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../TodoInputForm/styles";
import Plus from "../../../../assets/Plus.png"

type Props = {
  addTodo: (text: string) => void;
}

export function TodoInputForm({ addTodo }: Props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#808080"
        onChangeText={setText}
        value={text}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          addTodo(text);
          setText("");
        }}
      >
        <Image source={Plus} />
      </TouchableOpacity>
    </View>
  )
}