import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { NewMeal } from '@screens/NewMeal'
import { PositiveFeedback } from '@screens/PositiveFeedback'
import { NegativeFeedback } from '@screens/NegativeFeedback'
import { Meal } from '@screens/Meal'
import { EditMeal } from '@screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="stats"
        component={Stats}
      />
      <Screen 
        name="newMeal"
        component={NewMeal}
      />
       <Screen 
        name="positiveFeedback"
        component={PositiveFeedback}
      />
       <Screen 
        name="negativeFeedback"
        component={NegativeFeedback}
      />
       <Screen 
        name="meal"
        component={Meal}
      />
        <Screen 
        name="edit"
        component={EditMeal}
      />
    </Navigator>
  );
}