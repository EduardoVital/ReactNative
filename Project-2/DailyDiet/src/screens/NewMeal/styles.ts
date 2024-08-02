import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  padding: 30px 0;
`;

export const ContentWrapper = styled.View`
  padding: 0 24px;
  border-radius: 20px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;