import {
  Box, Button, styled, TextField, Typography,
} from '@mui/material';
import React from 'react';
import { useI18nContext } from '../../i18n/locale/i18n-react';

export interface ITerminalInputProps {
    onChange: (text: string) => void;
}

const TerminalInput = (props: ITerminalInputProps) => {
  const { onChange } = props;
  const { LL, locale, setLocale } = useI18nContext();

  return (
    <Box>
      <Typography variant="h2">{LL.hello()}</Typography>
      <TextField onChange={(event) => onChange(event.target.value)} />
      <Button onClick={() => {
        if (locale === 'en') {
          setLocale('es');
        } else {
          setLocale('en');
        }
      }}
      >Change locale
      </Button>
    </Box>
  );
};

export const StyledTerminalInput = styled(TerminalInput)(({ theme }) => ({
  caretColor: theme.palette.common.white,
}));
