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
  padding: 50px;
  width: 500px;
  margin: auto;
  
 
`;

const Header = styled.div`
position: fixed;
top: 0;
padding: 50px 50px 25px 50px;
background-color: white;
 h1, h2{
  text-align: center;
  margin-bottom: 20px;
  }
`

const FormWrapper = styled.div`
  width: 400px;
  position: fixed;
  bottom: 0;
 display: flex;
 
 .form{
 width: 100%;
 }
 
`

const MessegesWrapper = styled.div`
width: 100%;
height: auto;
`

function App() {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState([]);
    // console.log(messages);

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    useEffect(() => {
        setUser(prompt("Please enter your name"));

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
