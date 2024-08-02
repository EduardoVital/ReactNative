import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

type InputProps = {
  height: number;
  isFocused?: boolean;
}

type BulletPointProps = {
  isOnDiet: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

export const FlexWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const Date = styled.View`
  width: 47%;
`

export const Hour = styled.View`
  width: 47%;
`

export const BulletPoint = styled.View<BulletPointProps>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ButtonContainer = styled.View`
  margin-bottom: 30px;
`

export const InputField = styled(MaskedTextInput).attrs<InputProps>(({ theme, isFocused }) => ({
}))<InputProps>`
  width: 100%;
  border: 1px ${({ theme, isFocused }) => isFocused ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  border-radius: 6px;
  height: ${({ height }) => height}px;
  margin-bottom: 30px;
  padding: 14px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
