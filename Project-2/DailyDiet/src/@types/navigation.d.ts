export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      newMeal: undefined;
      positiveFeedback: undefined;
      negativeFeedback: undefined;
      meal: { mealDetails: { date: string; meal: any } };
      edit: { mealDetails: any };
    }
  }
}