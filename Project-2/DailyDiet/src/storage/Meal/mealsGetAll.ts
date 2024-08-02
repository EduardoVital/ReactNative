import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';

type Meals = {
  date: string;
  id: number;
  hour: string;
  name: string;
  isOnDiet: 'YES' | 'NO';
  description: string;
};


export async function mealsGetAll(): Promise<Meals[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: Meals[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
