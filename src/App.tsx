import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HeroBanner } from './components/HeroBanner';
import { Navbar } from './components/Navbar';
import { PageWrapper } from './components/PageWrapper';
import { HomePage } from './pages/HomePage';
import { PlayPage } from './pages/PlayPage';
import { ResultsPage } from './pages/ResultsPage';
import { theme } from './Theme';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <HeroBanner>
          <h1>Lottery</h1>
          <h1>JavaReady.pl</h1>
        </HeroBanner>
        <PageWrapper>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
