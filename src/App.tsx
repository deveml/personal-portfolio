import { Box } from '@mui/material';
import React from 'react';
import { StyledTerminalInput } from './components/terminal/TerminalInput';

const App = () => (
  <Box>
    <StyledTerminalInput onChange={(text) => { console.log(text); }} />
  </Box>
);

export default App;
