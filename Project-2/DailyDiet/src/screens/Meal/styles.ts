import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: relative;
`;

export const ButtonsContainer = styled.View`
  padding: 24px;
  margin-bottom: 20px;
  gap: 5px;
`