import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, TextWrapper, Text, FeedbackImage, Description, Span, TextButton, Button  } from './styles';
import positiveFeedback from '@assets/PositiveFeedback.png'

export function PositiveFeedback() {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('home')
  }
  return (
    <Container>
      <TextWrapper>
        <Text>
          Continue assim!
        </Text>
        <Description>
          Você continua <Span>dentro da dieta</Span>. Muito bem!
        </Description>
      </TextWrapper>
      <FeedbackImage source={positiveFeedback}/>
      <Button onPress={handleGoToHome}>
        <TextButton>Ir para página inicial</TextButton>
      </Button>
    </Container>
  )
}