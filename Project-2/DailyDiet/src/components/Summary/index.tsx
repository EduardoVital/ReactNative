import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Container, Card, Percent, Subtitle, Icon, IconArrowUpRight } from "./styles";
import { TouchableOpacity, Alert } from 'react-native';
import { mealsGetAll } from "@storage/Meal/mealsGetAll";
import { formatPercent } from '@utils/percent';

type ColorProps = 'GREEN' | 'RED';

export function Summary() {
  const [type, setType] = useState<ColorProps>('GREEN');
  const [percent, setPercent] = useState<number>(0);
  const [amountIsOnDiet, setAmountIsOnDiet] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleGoToStats = () => {
    navigation.navigate('stats');
  };

  const verifyIfIsOnDiet = () => {
    percent >= 50 ? setType('GREEN') : setType('RED');
  };

  const getPercentage = () => {
    const onDietAmount = amountIsOnDiet.filter(item => item === 'YES').length;
    const totalAmount = amountIsOnDiet.length;

    if (totalAmount === 0) {
      setPercent(0);
    } else {
      const calculatedPercent = (onDietAmount / totalAmount) * 100;
      setPercent(calculatedPercent);
    }
  };

  const fetchMeals = async () => {
    try {
      const data = await mealsGetAll();
      if (data && Array.isArray(data)) {
        const arrayOfFieldIsOnDiet = data.map(meal => meal.isOnDiet || 'NO');
        setAmountIsOnDiet(arrayOfFieldIsOnDiet);
      }
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível carregar as refeições');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals().then(() => {
        getPercentage();
      });
    }, [fetchMeals, getPercentage])
  );

  useEffect(() => {
    verifyIfIsOnDiet();
  }, [percent, verifyIfIsOnDiet]);

  return (
    <Container>
      <TouchableOpacity onPress={handleGoToStats}>
        <Card type={type}>
          <Icon>
            <IconArrowUpRight type={type} />
          </Icon>
          <Percent>{formatPercent(percent)}</Percent>
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </Card>
      </TouchableOpacity>
    </Container>
  );
}
