import { Box } from '@mui/material';
import LoginForm from '@/app/login/LoginForm';
import React from 'react';

export default function Home() {
  return (
    <Box className={'pages-container'}>
      <Box className={'pages-side-container'} sx={{width: '40%', display: 'flex'}}>This is Temp side</Box>
      <Box className={'pages-side-container'} sx={{width: '60%'}}>
        <LoginForm />
      </Box>
    </Box>
  );
}
