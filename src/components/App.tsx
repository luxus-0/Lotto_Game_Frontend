import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './App.styles';
import { theme } from './Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  );
};

export default App;
