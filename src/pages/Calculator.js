import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

export default function Calculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (!P || !r || !n) {
      setMonthlyPayment('Enter valid values');
      return;
    }

    const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(`₹${payment.toFixed(2)} / month`);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator DashBoard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField fullWidth label="Loan Amount" type="number" value={principal} onChange={e => setPrincipal(e.target.value)} /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Interest Rate (%)" type="number" value={rate} onChange={e => setRate(e.target.value)} /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Loan Term (Years)" type="number" value={years} onChange={e => setYears(e.target.value)} /></Grid>
        <Grid item xs={12} sx={{display:"flex", justifyContent:"end", width:"1"}}><Button variant="contained"  onClick={handleCalculate}>Calculate</Button></Grid>
        <Grid item xs={12}><Typography variant="h6">{monthlyPayment}</Typography></Grid>
      </Grid>
    </Paper>
  );
}