import React, { useState, useEffect, useCallback } from 'react';

import { RegularCard, NumberText, Text, DietBox, DietCard } from "./styles";

type MealEntry = {
  id: number;
  hour: string;
  name: string;
  isOnDiet: string;
  description: string;
};

type StatsHeaderProps = {
  meals: MealEntry[];
};


export function StatsContent({ meals }: StatsHeaderProps) {
  const [registeredMeals, setRegisteredMeals] = useState<number>(0);
  const [mealsOnDiet, setMealsOnDiet] = useState<number>(0);
  const [mealsNotOnDiet, setMealsNotOnDiet] = useState<number>(0);
  const [bestSequency, setBestSequency] = useState<number>(0)

  const bestSequenceOfMealsOnDiet = () => {
    let mapOfIsOnDiet = meals.map(meal => meal.isOnDiet);
   
    const maxSequence = mapOfIsOnDiet.reduce((max, current) => {
      if (current === "YES") {
          max.currentSequence++;
      } else {
          if (max.currentSequence > max.maxSequence) {
              max.maxSequence = max.currentSequence;
          }
          max.currentSequence = 0;
      }
      return max;
    }, { maxSequence: 0, currentSequence: 0 }).maxSequence;

    setBestSequency(maxSequence);
  }

  const getRegisteredMeals = () => {
    const registeredMeals = meals.length;
    setRegisteredMeals(registeredMeals);
  };

  const getMealsIsOnDietField = () => {
    const mealsOnDiet = meals.filter(meals => meals.isOnDiet === 'YES').length;
    const mealsNotOnDiet = meals.filter(meals => meals.isOnDiet === 'NO').length;

    setMealsOnDiet(mealsOnDiet);
    setMealsNotOnDiet(mealsNotOnDiet);
  };

  useEffect(() => {
    getRegisteredMeals();
    getMealsIsOnDietField();
    bestSequenceOfMealsOnDiet();
  }, [meals, getRegisteredMeals]);

  return (
    <>
      <RegularCard>
        <NumberText>
          {bestSequency}
        </NumberText>
        <Text>
          melhor sequência de pratos dentro da dieta
        </Text>
      </RegularCard>

      <RegularCard>
        <NumberText>
          {registeredMeals}
        </NumberText>
        <Text>
          Refeições registradas
        </Text>
      </RegularCard>
      
      <DietBox>
        <DietCard type='GREEN'>
          <NumberText>
            {mealsOnDiet}
          </NumberText>
          <Text>
            refeições dentro da dieta
          </Text>
        </DietCard>
        <DietCard type='RED'>
          <NumberText>
            {mealsNotOnDiet}
          </NumberText>
          <Text>
            refeições fora da dieta
          </Text>
        </DietCard>
      </DietBox>
    </>
  )
}