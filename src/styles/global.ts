import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary-color: #ff9000;
  --title-color: #312E38;
  --text-color: #6c6c80;
}


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  } 


  button {
    cursor: pointer;
  }
`;
