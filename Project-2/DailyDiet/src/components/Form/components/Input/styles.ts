import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

type InputProps = {
  height: number;
  isFocused: boolean;
}

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const InputField = styled.TextInput<InputProps>`
  width: 100%;
  border: 1px ${({ theme, isFocused }) => isFocused ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  border-radius: 6px;
  height: ${({ height }) => height}px;
  margin-bottom: 30px;
  padding: 14px;
  margin-top: 5px;
`
