import styled, {css} from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.MODAL};
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: 80%;
  height: 192px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding: 30px 16px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
`
