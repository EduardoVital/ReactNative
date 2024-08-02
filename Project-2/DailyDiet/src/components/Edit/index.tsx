import React, { useState } from 'react';
import { Container, FlexWrapper, Date, Hour, InputField, Text, ButtonContainer } from "../Form/styles";
import { Input } from '../Form/components/Input'
import { Checkbox } from '../Form/components/Checkbox'
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { mealEdit } from "@storage/Meal/mealEdit";
import { Button } from '@components/Button'

type RouteParams = {
  mealDetails?: any; 
};

export function Edit() {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { mealDetails } = route.params;

  const { name, description, hour, isOnDiet, id } = mealDetails?.meal;
  const { date } = mealDetails;

  const [field, setField] = useState({
    id: id,
    name: name,
    description: description,
    date: date,
    hour: hour,
    isOnDiet: isOnDiet,
  })
  const navigation = useNavigation();

  const handleFieldName = (name: string) => {
    setField({ ...field, name: name });
  }

  const handleDescription = (description: string) => {
    setField({ ...field, description: description });
  }

  const handleDate = (date: string) => {
    setField({ ...field, date: date });
  }

  const handleHour = (hour: string) => {
    setField({ ...field, hour: hour });
  } 

  const handleIsOnDiet = (isOnDiet: string) => {
    setField({ ...field, isOnDiet: isOnDiet });
  }

  const handleSubmitEdit = () => {
    if (!field.date || !field.description || !field.hour || !field.name || !field.isOnDiet) return;
    
    mealEdit(field);
    navigation.navigate('home');
  }

  return (
    <>
      <Container>
        <Input name='Nome' height={48} value={field.name} onChange={handleFieldName}/>
        <Input name='Descição' height={120}  multiline={true} value={field.description} onChange={handleDescription}/>

        <FlexWrapper> 
          <Date>
            <Text>Data</Text>
            <InputField height={48} type='date' value={date} onChangeText={(value) => handleDate(value)}
              options={{dateFormat: 'DD/MM/YYYY'}}
               mask="99/99/9999"
            />
          </Date>
          <Hour>
            <Text>Hora</Text>
            <InputField height={48} type='date' value={hour} onChangeText={(value) => handleHour(value)}
              options={{dateFormat: 'HH:mm'}}
               mask="99:99"
            />
          </Hour>
        </FlexWrapper>

        <Checkbox setIsOnDiet={handleIsOnDiet} isOnDiet={isOnDiet}/>
      </Container>
      <ButtonContainer>
        <Button color='WHITE' background='GRAY' text='Salvar edição' onPress={handleSubmitEdit}/>
      </ButtonContainer>
    </>
  )
}