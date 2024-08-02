import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, Card, Percent, Subtitle, Icon, IconArrowLeft } from "./styles";
import { TouchableOpacity } from 'react-native';
import { formatPercent } from '@utils/percent';

type ColorProps = 'GREEN' | 'RED';

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

export function StatsHeader({ meals }: StatsHeaderProps) {
  const [type, setType] = useState<ColorProps>('GREEN');
  const [percent, setPercent] = useState<number>(0);
  const [amountIsOnDiet, setAmountIsOnDiet] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleGoToBack() {
    navigation.navigate('home');
  }

  const verifyIfIsOnDiet = useCallback((calculatedPercent: number) => {
    setType(calculatedPercent >= 50 ? 'GREEN' : 'RED');
  }, []);

  const getPercentage = useCallback(() => {
    const onDietAmount = amountIsOnDiet.filter(item => item === 'YES').length;
    const totalAmount = amountIsOnDiet.length;

    if (totalAmount === 0) {
      setPercent(0);
    } else {
      const calculatedPercent = (onDietAmount / totalAmount) * 100;
      setPercent(calculatedPercent);
      verifyIfIsOnDiet(calculatedPercent);
    }
  }, [amountIsOnDiet, verifyIfIsOnDiet]);

  const getIsOnDietField = useCallback(() => {
    const arrayFieldIsOnDiet = meals.map(meal => meal.isOnDiet || 'NO');
    setAmountIsOnDiet(arrayFieldIsOnDiet);
  }, [meals]);

  useEffect(() => {
    getIsOnDietField();
  }, [meals, getIsOnDietField]);

  useEffect(() => {
    getPercentage();
  }, [amountIsOnDiet, getPercentage]);

  return (
    <Container type={type}>
      <TouchableOpacity onPress={handleGoToBack}>
        <Icon>
          <IconArrowLeft type={type} />
        </Icon>
      </TouchableOpacity>
      <Card type={type}>
        <Percent>{formatPercent(percent)}</Percent>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Card>
    </Container>
  );
}