import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Logo from "../../../../assets/Logo.png";

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={Logo} resizeMode="contain"/>
    </View>
  )
}