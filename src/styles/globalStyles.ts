import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }
  
  html body #root {
    height: 100% !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, #root {
    border: none;
    font: 400 1rem 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button, textarea:focus {
    border: none;
    outline: none;
  }

  #root {
    background-color: #AED9E0;

  }
`;

export default GlobalStyle;