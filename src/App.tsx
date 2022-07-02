import { Box, Typography } from '@mui/material';
import React from 'react';
import { StyledTerminalInput } from './components/Terminal/TerminalInput';

const App = () => (
  <Box>
    <Typography variant="h2">
      Learn react
    </Typography>
    <StyledTerminalInput onChange={(text) => { console.log(text); }} />
  </Box>
);

export default App;
