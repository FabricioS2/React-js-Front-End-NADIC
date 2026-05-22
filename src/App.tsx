import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import HomePage from './pages/HomePage';
import ConfirmationPage from './pages/ConfirmationPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/confirmacao" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;