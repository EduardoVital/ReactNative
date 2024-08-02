import React from 'react';
import { DetailsWrapper, DetailTitle, DetailDescription, DetailHourText, DetailHour, IsOnDietWrapper, IsOnDietColor, IsOnDiet } from "./styles";

type MealDetails = {
  date: string;
  meal: {
    id: number;
    hour: string;
    name: string;
    isOnDiet: 'YES' | 'NO';
    description: string;
  };
};

type MealDetailsProps = {
  detail: MealDetails;
};

export function Detail({ detail }: MealDetailsProps) {
  const { name, description, hour, isOnDiet } = detail?.meal;
  const { date } = detail;

  return (
    <DetailsWrapper>
      <DetailTitle>{name}</DetailTitle>
      <DetailDescription>{description}
      </DetailDescription>
      <DetailHourText>
        Data e hora
      </DetailHourText>
      <DetailHour>
        {date} às {hour}
      </DetailHour>
      <IsOnDietWrapper>
        <IsOnDietColor isOnDiet={isOnDiet}/>
        {isOnDiet === 'YES' &&  <IsOnDiet>dentro da dieta</IsOnDiet> }
        {isOnDiet === 'NO' &&  <IsOnDiet>fora da dieta</IsOnDiet> }
      </IsOnDietWrapper>
    </DetailsWrapper>
  );
}
