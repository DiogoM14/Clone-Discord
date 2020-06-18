import React from 'react';

import {Container, Separator} from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <SeverButton isHome />

      <Separator />

      <SeverButton />
      <SeverButton hasNotifications />
      <SeverButton mentions={3} />
      <SeverButton />
      <SeverButton />
      <SeverButton />
      <SeverButton />
      <SeverButton mentions={23} />
      <SeverButton />
      <SeverButton />
      <SeverButton hasNotifications />
      <SeverButton />

    </Container>
  );
};

export default ServerList;