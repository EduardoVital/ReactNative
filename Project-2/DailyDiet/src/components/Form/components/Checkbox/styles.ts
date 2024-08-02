import styled , { css } from "styled-components/native";

type BulletPointProps = {
  isOnDiet: boolean;
}

type isActiveProps = {
  active: boolean;
}

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const FlexWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const IsOnDietBox = styled.TouchableOpacity<isActiveProps>`
  margin-top: 5px;  
  width: 47%;
  border-radius: 6px;
  background-color: ${({ theme, active }) => active ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  height: 50px;
  flex-direction: row;
  gap: 5px;

  ${({ theme, active }) =>
    active &&
    css`
      border: 1px ${theme.COLORS.GREEN_DARK};
    `}
`

export const IsNotOnDietBox = styled.TouchableOpacity<isActiveProps>`
  margin-top: 5px;  
  width: 47%;
  border-radius: 6px;
  background-color: ${({ theme, active }) => active ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  height: 50px;
  flex-direction: row;
  gap: 5px;

  ${({ theme, active }) =>
    active &&
    css`
      border: 1px ${theme.COLORS.RED_DARK};
    `}
`

export const BulletPoint = styled.View<BulletPointProps>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
