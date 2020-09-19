import React from 'react';
import styled from 'styled-components'

const MessageWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  width: fit-content;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 .1em .5em lightgrey ;
  font-size: ${({theme}) => theme.font.size.l};
  
  //background-color: ${(props) => props.message ? 'blue' : 'white'};
  .message{
  background-color: blue;
  }
`;

const Message = ({name, text}) => {

    // const isUser = name === text.name;

    const isUser = true;

    return (
        <MessageWrapper className={`${isUser && 'message'}`}>
          {text.name}: {text.text}
        </MessageWrapper>
    );
};

export default Message;
