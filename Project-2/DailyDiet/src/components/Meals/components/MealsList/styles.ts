import styled, {css} from "styled-components/native";
import { ActivityIndicator } from 'react-native';

type Props = {
  isOnDiet: 'YES' | 'NO';
}

export const Container = styled.View`
  margin: 30px 0px;
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  padding: 15px 10px;
  border-radius: 5px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border: 1px  ${({ theme }) => theme.COLORS.GRAY_500};
  margin: 5px 0;
`

export const HourBox = styled.View`
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-right: 10px;
`

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Circle = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet === 'YES' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  flex: 3;
`

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 20px;
`

export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

export const Loading = styled.ActivityIndicator`
  flex: 1;
  justify-content: 'center';
  align-items: 'center';
`