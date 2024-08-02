import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';
import { MEALS_COLLECTION } from '@storage/storageConfig';

type Meal = {
  hour: string;
  description: string;
  isOnDiet: string;
  date: string;
  name: string;
};

type MealEntry = {
  date: string;
  id: number;
  hour: string;
  name: string;
  isOnDiet: string;
  description: string;
};

export async function mealCreate(newMeal: Meal) {
  try {
    const newMealEntry = {
      date: newMeal.date,
      id: Math.floor(Math.random() * 100000),
      hour: newMeal.hour,
      name: newMeal.description,
      isOnDiet: newMeal.isOnDiet,
      description: newMeal.description,
    };

    const storedGroups: MealEntry[] = await mealsGetAll();

    const updatedGroups = [...storedGroups, newMealEntry];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedGroups));
  } catch (error) {
    if (error instanceof AppError) {
      console.error(`AppError: ${error.message}`);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    throw error;
  }
}
