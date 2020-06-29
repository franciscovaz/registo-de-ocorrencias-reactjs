import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary-color: #ff9000;
  --title-color: #312E38;
  --text-color: #6c6c80;
  --text-color-white: #fff;
  --background-color: #c0c1c4;
  --textarea-background: #f0f0f5;
  --error-color: #FF0000;
}


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #c0c1c4;
    color: #606062;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  } 


  button {
    cursor: pointer;
  }
`;
