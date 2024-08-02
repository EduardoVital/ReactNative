import styled from "styled-components/native";

type Props = {
  isOnDiet: 'YES' | 'NO'
}

export const DetailsWrapper = styled.View`
  padding: 34px 24px;
  border-radius: 20px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`

export const DetailTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const DetailDescription = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 3px;
`

export const DetailHourText = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 20px;
`

export const DetailHour = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 3px;
`

export const IsOnDietWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: 145px;
  border-radius: 50%;
`

export const IsOnDietColor = styled.View<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, isOnDiet }) => isOnDiet === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 50%;
`

export const IsOnDiet = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`