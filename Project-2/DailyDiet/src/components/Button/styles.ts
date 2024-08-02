import styled, {css} from "styled-components/native";
import Plus from '@assets/Plus.svg';
import Edit from '@assets/EditIcon.svg';
import Delete from '@assets/TrashIcon.svg';

type BackgroundProps = {
  background: 'WHITE' | 'GRAY',
  width?: string;
}

type ColorProps = {
  color: 'WHITE' | 'GRAY',
}

interface IconProps {
  color?: 'WHITE' | 'GRAY';
}

export const Container = styled.View`
  margin-top: 5px;
`;

export const Card = styled.View<BackgroundProps>`
  background-color: ${({theme, background, width}) => background === 'GRAY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  padding: 20px;
  border-radius: 5px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: ${({ theme, background }) => background === 'WHITE' ? `1px solid ${theme.COLORS.GRAY_200}` : 'none'};
  width: ${({ width }) => width ? `${width}px` : 'unset' }
`

export const Text = styled.Text<ColorProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme, color }) => color === 'GRAY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const IconPlus = styled(Plus).attrs<IconProps>(({ theme, color }) => ({
  width: 18,
  height: 18,
  color: color === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))<IconProps>``;

export const IconEdit = styled(Edit).attrs<IconProps>(({ theme, color }) => ({
  width: 18,
  height: 18,
  color: color === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))<IconProps>``;

export const IconDelete = styled(Delete).attrs<IconProps>(({ theme, color }) => ({
  width: 18,
  height: 18,
  color: color === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))<IconProps>``;