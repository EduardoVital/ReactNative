import { Container, Title, ContentWrapper } from "./styles";

import { NewMealHeader as Header } from '@components/NewMealHeader'
import { Form } from '@components/Form'

export function NewMeal() {
  return (
    <Container>
      <Header title="Nova refeição"/>
      <ContentWrapper>
        <Form />
      </ContentWrapper>
    </Container>
  )
}