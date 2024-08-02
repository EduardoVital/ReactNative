import React, { useState } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { Container, ButtonsContainer } from "./styles";
import { Header } from '@components/Meal/Header'
import { Detail } from '@components/Meal/Detail'
import { Button } from '@components/Button'
import { mealRemove } from "@storage/Meal/mealRemove";
import { Modal } from '@components/Modal'

type Meal = {
  id: number;
  hour: string;
  name: string;
  isOnDiet: 'YES' | 'NO';
  description: string;
};

type MealDetails = {
  date: string;
  meal: Meal;
};

type RouteParams = {
  mealDetails?: MealDetails; 
};

export function Meal() {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const navigation = useNavigation();

  const [ isVisible, setIsVisible ] = useState<boolean>(false);

  const { mealDetails = { date: '', meal: { id: 0, hour: '', name: '', isOnDiet: 'NO', description: '' } } } = route.params;

  const handleOpenModal = () => {
    setIsVisible(true);
  }

  const handleCancelOperation = () => {
    setIsVisible(false);
  }

  const handleRemoveMeal = () => {
    mealRemove(mealDetails?.meal?.id);
    navigation.navigate('home');
  }

  const handleEditMeal = () => {
    navigation.navigate('edit', { mealDetails });
  }

  return (
    <Container>
      <Header isOnDiet={mealDetails?.meal?.isOnDiet}/>
      <Detail detail={mealDetails} />
      <ButtonsContainer>
        <Button text='Editar refeição' icon='EDIT' background='GRAY' color='WHITE' onPress={handleEditMeal}/>
        <Button text='Excluir refeição' icon='DELETE' background='WHITE' color='GRAY' onPress={handleOpenModal}/>
      </ButtonsContainer>
      <Modal isVisible={isVisible} handleCancel={handleCancelOperation} handleRemove={handleRemoveMeal}/>
    </Container>
  );
}
