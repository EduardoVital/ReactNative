import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { Container, Title, IconArrowLeft, Wrapper } from "./styles";
import { TouchableOpacity } from 'react-native';

interface Props {
  title: string;
}

export function NewMealHeader({ title }: Props) {
  const navigation = useNavigation();
  
  function handleGoToBack() {
    navigation.navigate('home')
  }
 
  return (
    <Container>
      <Wrapper>
        <TouchableOpacity onPress={handleGoToBack}>
          <IconArrowLeft/>
        </TouchableOpacity>
        <Title>
          { title }
        </Title>
      </Wrapper>
    </Container>
  ) 
}