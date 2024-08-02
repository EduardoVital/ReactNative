import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color:${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const TextWrapper = styled.View`
  align-items: center;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
` 

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
  margin: 30px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 30px;
`

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;
