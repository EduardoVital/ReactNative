import React from "react";
import { View, Text, Image } from "react-native";
import Clipboard from "../../../../assets/Clipboard.png";
import { styles } from "./styles";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyStatusWrapper}>
        <View style={styles.emptyStatus}> 
          <Image style={styles.image} source={Clipboard} />
          <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    </View>
  )
}