import { Brightness4, Brightness7 } from '@mui/icons-material';
import { AppBar, Container, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Calculator from './pages/Calculator';
import ExchangeRatesLive from './pages/ExchangeRatesLive';
import NotFound from './pages/NotFound';
import { getTheme } from './theme';

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Loan Calculator</Typography>
            <Link to="/" style={{ color: 'inherit', marginRight: 16, textDecoration: 'none'}}>HOME</Link>
            <Link to="/exchange-rates" style={{ color: 'inherit', marginRight: 16, textDecoration: 'none' }}>EXCHANGE RATES(LIVE)</Link>
            <IconButton onClick={() => setMode(prev => prev === 'light' ? 'dark' : 'light')} color="inherit">
              {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Calculator />} />
              <Route path="/exchange-rates" element={<ExchangeRatesLive />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
