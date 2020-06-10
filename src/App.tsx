import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
