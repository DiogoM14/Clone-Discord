import React from 'react';

import {Container, Title, ExpandIcon} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Title>First Server</Title>

      <ExpandIcon />
    </Container>
  );
};

export default Layout;