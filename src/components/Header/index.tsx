import React from 'react';

import { Container, Title } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default Header;
