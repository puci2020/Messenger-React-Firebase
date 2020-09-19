import React, {useState} from 'react';
import styled from 'styled-components'
import Layout from "./Theme/Layout";


const P  = styled.p`
  font-size: ${({theme}) => theme.font.size.m};
`

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);


    const sendMessage = (event) => {
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <Layout>
            <div className="App">
                <h1>Messenger create by React and Firebase</h1>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <button onClick={sendMessage}>Send</button>
            </div>

            {messages.map(message => (
                <P>{message}</P>
            ))}
        </Layout>
    );
}

export default App;
