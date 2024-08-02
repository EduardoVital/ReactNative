import styled, {css} from "styled-components/native";

export const Container = styled.View`
  margin-top: 50px;
  height: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}
`

