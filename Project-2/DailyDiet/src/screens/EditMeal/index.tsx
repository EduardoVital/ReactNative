import { Container, Title, ContentWrapper } from "../NewMeal/styles";

import { NewMealHeader as Header } from '@components/NewMealHeader'
import { Edit } from '@components/Edit'

export function EditMeal() {
  return (
    <Container>
      <Header title="Editar refeição"/>
      <ContentWrapper>
        <Edit />
      </ContentWrapper>
    </Container>
  )
}