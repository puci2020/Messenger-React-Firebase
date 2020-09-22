import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Layout from "./Theme/Layout";
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import Message from "./Message";
import db from './firebase'
import firebase from "firebase";

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
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
//padding: 50px 50px 25px 50px;
  background-color: white;
 h1, h2{
  text-align: center;
  margin-bottom: 20px;
  }
`

const FormWrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 
 .form{
 width: 500px;
 }
 
`

const MessegesWrapper = styled.div`
width: 500px;
height: auto;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

function App() {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('Adam');
    const [messages, setMessages] = useState([]);
    // console.log(messages);

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    useEffect(() => {
        // setUser(prompt("Please enter your name"));

    }, []);

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
                <Header>
                <h1>Messenger create by React and Firebase</h1>
                <h2>Welcome {user}</h2>
                </Header>
<MessegesWrapper>
                {messages.map(message => (
                    <Message name={user} text={message}/>
                ))}
</MessegesWrapper>
                <FormWrapper>
                <FormControl className="form">
                    <InputLabel>Enter a message</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button>
                </FormControl>
                </FormWrapper>
            </Wrapper>
        </Layout>
    );
}

export default App;
