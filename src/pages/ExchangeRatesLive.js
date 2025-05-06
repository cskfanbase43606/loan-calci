import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const API_KEY =  "8750738088bc6fce9452b6f0" ;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export default function ExchangeRatesLive() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then(data => {
        setRates(data.conversion_rates);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {Object.entries(rates).map(([currency, rate]) => (
              <TableRow key={currency}>
                <TableCell>{currency}</TableCell>
                <TableCell>{rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}