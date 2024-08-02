import React, { useState, useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, Card, Hour, Text, Date, HourBox, Circle, Loading, LoaderContainer } from "./styles";
import { Alert, FlatList, View } from 'react-native';
import { mealsGetAll } from "@storage/Meal/mealsGetAll";

import { useFocusEffect } from '@react-navigation/native'


type Meal = {
  date: string;
  id: number;
  hour: string;
  name: string;
  isOnDiet: 'YES' | 'NO';
  description: string;
};

type GroupedMeals = {
  date: string;
  meals: Omit<Meal, 'date'>[];
};

type MealDetails = {
  item: GroupedMeals;
  meal: Omit<Meal, 'date'>;
};

export function MealsList() {
  const [ meals, setMeals ] = useState<GroupedMeals[]>();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const navigation = useNavigation();

  const formatMealsDataIntoGroupedMeals = (meals: Meal[]) => {
    const groupedMeals = meals.reduce((acc, meal) => {
      const dateGroup = acc.find(group => group.date === meal.date);

      if (dateGroup) {
        dateGroup.meals.push({
          id: meal.id,
          hour: meal.hour,
          name: meal.name,
          isOnDiet: meal.isOnDiet,
          description: meal.description
        });
      } else {
        acc.push({
          date: meal.date,
          meals: [{
            id: meal.id,
            hour: meal.hour,
            name: meal.name,
            isOnDiet: meal.isOnDiet,
            description: meal.description
          }]
        });
      }

      return acc;
    }, [] as GroupedMeals[]);

    setMeals(groupedMeals);
  } 

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      formatMealsDataIntoGroupedMeals(data);
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível carregar as refeições');
    } finally {
      setIsLoading(false);
    }
  }

  const handleViewMealDetails = (details: MealDetails) => {
    const { item, meal } = details;
    const date = item?.date;
    navigation.navigate('meal', { mealDetails: { date, meal }});
  }

  useFocusEffect(useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchMeals();
    }, 2000);
  },[]))

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loading size="large" color='black' />
      </LoaderContainer>
    );
  }
  
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={meals}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
        <View>
        <Date>{item.date}</Date>
        <FlatList
          data={item.meals}
          keyExtractor={(meal, index) => meal?.id?.toString()}
          renderItem={({ item: meal }) => (
            <Card onPress={() => handleViewMealDetails({item, meal})}>
              <HourBox>
                <Hour>{meal.hour}</Hour>
              </HourBox>
              <Text numberOfLines={1}>{meal.name}</Text>
              <Circle isOnDiet={meal.isOnDiet}/>
            </Card>
          )}
        />
        </View>
        )}
      />
    </Container>
  )
}