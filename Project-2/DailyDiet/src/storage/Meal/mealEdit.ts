import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';
import { MEALS_COLLECTION } from '@storage/storageConfig';

type Meal = {
  id: number;
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

export async function mealEdit(editedMeal: Meal) {
  const { id } = editedMeal;
  try {
    const storedGroups: MealEntry[] = await mealsGetAll();

    const updatedGroups = storedGroups.map(meal => ( meal.id === id ? editedMeal : meal));

    console.log(updatedGroups);
    
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
