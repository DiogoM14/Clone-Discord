import React from 'react';

import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="free-chat" />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="meetings" />
      <ChannelButton channelName="distractions" />
      <ChannelButton channelName="cs-go" />
      <ChannelButton channelName="gta-v" />
    </Container>
  );
};

export default ChannelList;