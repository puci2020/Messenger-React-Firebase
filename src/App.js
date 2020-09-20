import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Layout from "./Theme/Layout";
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import Message from "./Message";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  width: 500px;
  margin: auto;
  
  h1, h2{
  text-align: center;
  margin-bottom: 20px;
  }
  

`;

function App() {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState([{name: 'czoko', text: 'siema'}]);
    // console.log(messages);

    useEffect(() => {
        setUser(prompt("Please enter your name"));

    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, {name: user, text: input}]);
        setInput('');
    };

    return (
        <Layout>
            <Wrapper>
                <h1>Messenger create by React and Firebase</h1>
                <h2>Welcome {user}</h2>
                <FormControl>
                    <InputLabel>Enter a message</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button>
                </FormControl>

                {messages.map(message => (
                    <Message name={user} text={message}/>
                ))}
            </Wrapper>
        </Layout>
    );
}

export default App;
