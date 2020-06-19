import React from 'react';

import {Container, HashtagIcon, Title, Separator, Description} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>free-chat</Title>

      <Separator />

      <Description>Channel open to chat</Description>
    </Container>
  );
};

export default ChannelInfo;