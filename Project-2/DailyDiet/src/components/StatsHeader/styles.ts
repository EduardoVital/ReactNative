import styled, {css} from "styled-components/native";
import ArrowLeft from '@assets/ArrowLeft.svg';

export type ColorProps = 'GREEN' | 'RED';

type Props = {
  type: ColorProps;
}

export const Container = styled.View<Props>`
  padding-top: 60px;
  background-color: ${({theme, type}) => type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Card = styled.View<Props>`
  position: relative;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, type}) => type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 5px;
`

export const Percent = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXXL}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
`
export const Icon = styled.View`
  margin-left: 30px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;
