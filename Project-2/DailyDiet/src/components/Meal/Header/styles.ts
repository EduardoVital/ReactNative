import styled from "styled-components/native";
import ArrowLeft from '@assets/ArrowLeft.svg';

type ContainerProp = {
  background: 'YES' | 'NO',
}

export const Container = styled.View<ContainerProp>`
  padding: 0px 24px 40px;
  background-color: ${({theme, background}) => background === 'YES' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center; 
  flex: 1;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;

