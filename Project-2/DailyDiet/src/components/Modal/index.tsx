import React from 'react';
import { Container, Card, Text, ButtonContainer } from "./styles";

import { Button } from '@components/Button'

type ModalProps = {
  isVisible: boolean;
  handleCancel: () => void;
  handleRemove: () => void;
}

export function Modal({isVisible = false, handleCancel, handleRemove}: ModalProps) {

  return (
    isVisible && (
      <Container>
        <Card>
          <Text>Deseja realmente excluir o registro da refeição?</Text>
          <ButtonContainer>
            <Button text='Cancelar' background='WHITE' color='GRAY' width='130' onPress={handleCancel}/>
            <Button text='Sim, excluir' background='GRAY' color='WHITE' width='130' onPress={handleRemove}/>
          </ButtonContainer>
        </Card>
      </Container>
    )
  )
}