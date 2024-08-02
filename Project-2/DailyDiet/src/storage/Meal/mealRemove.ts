import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';
import { MEALS_COLLECTION } from '@storage/storageConfig';

type MealEntry = {
  date: string;
  id: number;
  hour: string;
  name: string;
  isOnDiet: string;
  description: string;
};

export async function mealRemove(id: number) {
  try {
    const storedGroups: MealEntry[] = await mealsGetAll();
    
    const updatedGroups = storedGroups.filter(meals => meals.id !== id);
  
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedGroups));
  } catch (error) {
    console.error('Error removing meal:', error);
  }
}