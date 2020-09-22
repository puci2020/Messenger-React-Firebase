import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Layout from "./Theme/Layout";
import {Input, FormControl} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from "@material-ui/core";
import Message from "./Message";
import db from './firebase'
import firebase from "firebase";
import FlipMove from 'react-flip-move'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  margin: auto;
  
 
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
 h1, h2{
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 15px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: white;
  bottom: 0;
  //top:100px;
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 1;
 
 .form{
 width: 500px;
padding: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


 }
 
 .form__input{
 flex: 1;
 font-size: ${({theme}) => theme.font.size.m};
 }
 
 .form__button{
 flex:0;
 }
 
`;

const MessegesWrapper = styled.div`
width: 500px;
max-width: 100vw;
height: auto;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position:relative;
`;


function App() {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState([]);
    // console.log(messages);

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
        })
    }, []);

    useEffect(() => {
        setUser(prompt("Please enter your name"));

    }, [])
    const sendMessage = (event) => {
        event.preventDefault();

        db.collection('messages').add({
            text: input,
            name: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    };

    return (
        <Layout>
            <Wrapper>
                <Header>;

                    <h1>Messenger create by React and Firebase</h1>
                    <h2>Welcome {user}</h2>
                </Header>
                <FormWrapper>
                    <FormControl className="form">
                        <Input className="form__input" placeholder="Enter a message" type='text' value={input} onChange={event => setInput(event.target.value)}/>

                        <IconButton className="form_button" disabled={!input} variant="contained" color="primary" type="submit"
                                    onClick={sendMessage}>
<SendIcon/>
                        </IconButton>
                    </FormControl>
                </FormWrapper>

                <MessegesWrapper>
                    <FlipMove style={{width: '100%'}}>
                        {messages.map(({id, message}) => (
                            <Message key={id} name={user} text={message}/>
                        ))}
                    </FlipMove>
                </MessegesWrapper>


            </Wrapper>
        </Layout>
    );
}

export default App;
