import React, {forwardRef} from 'react';
import styled from 'styled-components'

const MessageWrapper = styled.div`
  font-size: ${({theme}) => theme.font.size.l};
  width: 100%;
  overflow-y: hidden;
  
  .message__box{
      margin: 0 10px 10px 10px;
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
  & .message__text{ 
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    float: right;
    text-align: right;
  }
  
  .message__span{
  padding: 0 25px;
  width: 100%;
  font-size: ${({theme}) => theme.font.size.s};
  color: ${({theme}) => theme.colors.gray};
  }
  & .message__user{
  display: none;
  }
`;



const Message = forwardRef(({name, text}, ref) => {

    const isUser = name === text.name;

    return (

        <MessageWrapper ref={ref}>
            <div className={isUser ? 'message__user' : 'message__span'}>{text.name}</div>
            <div className={isUser ? 'message__box message__text' : 'message__box'}>

                {text.text}
            </div>
        </MessageWrapper>

    );
});

export default Message;
