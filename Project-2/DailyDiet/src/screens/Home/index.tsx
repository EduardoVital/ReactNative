import React from 'react';

import { Container } from "./styles";
import { Header } from '@components/Header'
import { Summary } from '@components/Summary'
import { Meals } from '@components/Meals'

export function Home() {
  return (
    <Container>
      <Header />
      <Summary />
      <Meals />
    </Container>
  )
}