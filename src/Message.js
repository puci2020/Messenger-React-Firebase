import React from 'react';
import styled from 'styled-components'

const MessageWrapper = styled.div`
  font-size: ${({theme}) => theme.font.size.l};
  width: 100%;
  
  .box{
      margin: 10px;
      padding: 10px;
      width: fit-content;
      height: fit-content;
      max-width: 90%;
      border: 1px solid lightgrey;
      border-radius: 20px;
      box-shadow: 0 .1em .5em lightgrey ;
      background-color: ${({theme}) => theme.colors.secondary};
      color: ${({theme}) => theme.colors.white};
   }
  & .message{ 
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    float: right;
  }

`;

const Message = ({name, text}) => {

    const isUser = name === text.name;

    // const isUser = true;

    return (

        <MessageWrapper>
            <div className={isUser ? 'box message' : 'box'}>
                {text.name}: {text.text}
            </div>
        </MessageWrapper>

    );
};

export default Message;
