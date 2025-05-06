import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>404</Typography>
      <Typography variant="h5" gutterBottom>Page Not Found</Typography>
      
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          mt: 3,
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: 'darkgreen',
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}
