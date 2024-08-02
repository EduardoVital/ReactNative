import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, TextWrapper, Text, FeedbackImage, Description, Span, TextButton, Button  } from './styles';
import negativeFeedback from '@assets/NegativeFeedback.png'

export function NegativeFeedback() {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('home')
  }
  return (
    <Container>
      <TextWrapper>
        <Text>
          Que pena!
        </Text>
        <Description>
          Você <Span>saiu da dieta</Span> desta vez, mas continue se esforçando e não desista!
        </Description>
      </TextWrapper>
      <FeedbackImage source={negativeFeedback}/>
      <Button onPress={handleGoToHome}>
        <TextButton>Ir para página inicial</TextButton>
      </Button>
    </Container>
  )
}
