import { Typography } from '@mui/material';
import React from 'react';

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      textAlign={{ xs: 'center', lg: 'start' }}
      fontSize={{ xs: 14, lg: 20 }}
      fontWeight={{ xs: '300', lg: '900' }}
      mb={4}
    >
      {children}
    </Typography>
  );
}
