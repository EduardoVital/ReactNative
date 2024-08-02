import { Container, Logo, Avatar } from "./styles";

import logoImg from '@assets/Logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar />
    </Container>
  )
}