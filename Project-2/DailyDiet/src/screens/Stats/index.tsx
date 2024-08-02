import React, { useState, useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { Container, Title, ContentWrapper } from "./styles";
import { Alert } from 'react-native';
import { mealsGetAll } from "@storage/Meal/mealsGetAll";

import { StatsHeader as Header } from '@components/StatsHeader';
import { StatsContent as Content } from '@components/StatsContent';

type MealEntry = {
  id: number;
  hour: string;
  name: string;
  isOnDiet: string;
  description: string;
};

export function Stats() {
  const [meals, setMeals] = useState<MealEntry[]>([]);

  const fetchMeals = useCallback(async () => {
    try {
      const data = await mealsGetAll();
      if (data && Array.isArray(data)) {
        setMeals(data);
      }
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível carregar as informações');
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [fetchMeals])
  );

  return (
    <Container>
      <Header meals={meals} />
      <ContentWrapper>
        <Title>Estatísticas gerais</Title>
        <Content meals={meals}/>
      </ContentWrapper>
    </Container>
  );
}