import { Box, Typography } from '@mui/material';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" color="error">Something went wrong.</Typography>
          <Typography variant="body1">Please try refreshing the page.</Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
