import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }  
  html, body{
  font-size: 10px;
  }
`;

export default GlobalStyle;
