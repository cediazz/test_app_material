import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function BasicGrid() {
    return (
      
        <Grid container >
          <Grid sx={{backgroundColor:'red'}} size={8}>
            size=8
          </Grid>
          <Grid sx={{backgroundColor:'blue'}} size={4}>
            size=4
          </Grid>
          <Grid size={4}>
            size=4
          </Grid>
          <Grid size={8}>
            size=8
          </Grid>
        </Grid>
      
    );
  }