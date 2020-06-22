import React, {useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
      
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="XavI"
          date="10/01/2020"
          content="It's my birthday!!!"
        />
        <ChannelMessage 
          author="Paul"
          date="10/01/2020"
          content="Hello"
        />

        <ChannelMessage 
          author="Music"
          date="10/01/2020"
          content={
            <>
              <Mention>@XavI</Mention>, Happy birthday!
            </>
          }
          hasMention
          isBot
        />
        
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="chat in #free-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;