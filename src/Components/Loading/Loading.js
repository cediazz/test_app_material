import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', alignItems:"center",justifyContent: 'center',height: '60vh' }}>
      <CircularProgress color="appbar" size="10rem"/>
    </Box>
  );
}