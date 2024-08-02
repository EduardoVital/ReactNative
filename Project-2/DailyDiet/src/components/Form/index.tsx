import React, { useState } from 'react';
import { Container, FlexWrapper, Date, Hour, InputField, Text, ButtonContainer } from "./styles";
import { Input } from './components/Input'
import { Checkbox } from './components/Checkbox'
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/Meal/mealCreate";
import { Button } from '@components/Button'

export function Form() {
  const [field, setField] = useState({
    name: '',
    description: '',
    date: '',
    hour: '',
    isOnDiet: '',
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

  const handleSubmit = () => {
    if (!field.date || !field.description || !field.hour || !field.name || !field.isOnDiet) return;
    
    mealCreate(field);

    setField({ hour: '', name: '', date: '', description: '', isOnDiet: ''});

    if (field.isOnDiet) return navigation.navigate('positiveFeedback');
    else return navigation.navigate('negativeFeedback');
  }

  return (
    <>
      <Container>
        <Input name='Nome' height={48} value={field.name} onChange={handleFieldName}/>
        <Input name='Descição' height={120}  multiline={true} value={field.description} onChange={handleDescription}/>

        <FlexWrapper> 
          <Date>
            <Text>Data</Text>
            <InputField height={48} type='date' onChangeText={(value) => handleDate(value)}
              options={{dateFormat: 'DD/MM/YYYY'}}
               mask="99/99/9999"
            />
          </Date>
          <Hour>
            <Text>Hora</Text>
            <InputField height={48} type='date' onChangeText={(value) => handleHour(value)}
              options={{dateFormat: 'HH:mm'}}
               mask="99:99"
            />
          </Hour>
        </FlexWrapper>

        <Checkbox setIsOnDiet={handleIsOnDiet}/>
      </Container>
      <ButtonContainer>
        <Button color='WHITE' background='GRAY' text='Nova refeição' icon='ADD' onPress={handleSubmit}/>
      </ButtonContainer>
    </>
  )
}