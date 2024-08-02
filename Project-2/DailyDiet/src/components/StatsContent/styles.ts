import styled from "styled-components/native";

export type ColorProps = 'GREEN' | 'RED';

type Props = {
  type: ColorProps;
}

export const RegularCard = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;
  margin-bottom: 10px;
`;

export const NumberText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  padding-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`;

export const DietBox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`

export const DietCard = styled.View<Props>`
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 16px;
  margin-bottom: 10px;
  width: 48.5%;
`