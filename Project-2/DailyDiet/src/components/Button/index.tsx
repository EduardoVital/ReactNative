import React from 'react';
import { useNavigation } from "@react-navigation/native";

import { Container, Card, Text, IconPlus, IconEdit, IconDelete } from "./styles";
import { TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
  icon?: 'EDIT' | 'ADD' | 'DELETE';
  background: 'WHITE' | 'GRAY';
  color: 'WHITE' | 'GRAY';
  width?: string;
  onPress: () => void
};

export function Button({text, icon, background, color, width, onPress}: ButtonProps) {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Card background={background} width={width}>
          {
            icon === 'EDIT' && <IconEdit color={color}/>
          }
          {
            icon === 'ADD' && <IconPlus color={color}/>
          }
          {
            icon === 'DELETE' && <IconDelete color={color}/>
          }
          <Text color={color}>{text}</Text>
        </Card>
      </TouchableOpacity>
    </Container>
  )
}