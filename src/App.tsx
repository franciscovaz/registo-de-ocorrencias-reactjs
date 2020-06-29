import React, { useState, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import SwitchComponent from './components/Switch';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>

        <SwitchComponent toggleTheme={toggleTheme} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
