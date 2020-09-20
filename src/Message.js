import React from 'react';
import styled from 'styled-components'

const MessageWrapper = styled.div`
  margin: 10px;
 
 
  font-size: ${({theme}) => theme.font.size.l};
  width: 100%;
  
  .message{
  padding: 10px;
  height: 100%;
  background-color: blue;
  float: right;
   width: fit-content;
    border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 .1em .5em lightgrey ;
  }
  
  .other{
    padding: 10px;
  height: 100%;
  background-color:white;
   border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 .1em .5em lightgrey ;

   width: fit-content;
  }
`;

const Message = ({name, text}) => {

    const isUser = name === text.name;

    // const isUser = true;

    return (

            <MessageWrapper>
                <div className={isUser ? 'message' : 'other'}>
                {text.name}: {text.text}
                </div>
            </MessageWrapper>

    );
};

export default Message;
