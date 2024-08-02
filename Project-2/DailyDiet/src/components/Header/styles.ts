import styled, {css} from "styled-components/native";
import { User } from 'phosphor-react-native';

export const Container = styled.View`
  padding-top: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

/* export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 50px;
` */

export const Avatar = styled(User).attrs(({ theme, color }) => ({}))`
  width: 40px;
  height: 40px;
  /* background-color: ${({theme}) => theme.COLORS.GRAY_100}; */
  border-radius: 50px;
`;
