import React, { useState } from 'react';
import { Container, Title } from "./styles";

import { Button } from '@components/Button'
import { MealsList } from './components/MealsList'
import { useNavigation } from '@react-navigation/native';

export function Meals() {
  const navigation = useNavigation();

  const handleGoToNewMeal = () => {
    navigation.navigate('newMeal')
  }

  return (
    <Container>
     <Title>Refeições</Title>
     <Button color='WHITE' background='GRAY' text='Nova refeição' icon='ADD' onPress={handleGoToNewMeal}/>
     <MealsList />
    </Container>
  )
}