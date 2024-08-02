import React, { useState, useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";

import { Container, Title, IconArrowLeft, Wrapper } from "./styles";
import { TouchableOpacity } from 'react-native';

interface Props {
  isOnDiet: 'YES' | 'NO';
}

export function Header({ isOnDiet }: Props) {
  const navigation = useNavigation();
  
  function handleGoToBack() {
    navigation.navigate('home')
  }
 
  return (
    <Container background={isOnDiet}>
      <Wrapper>
        <TouchableOpacity onPress={handleGoToBack}>
          <IconArrowLeft/>
        </TouchableOpacity>
        <Title>
          Refeição
        </Title>
      </Wrapper>
    </Container>
  );
}