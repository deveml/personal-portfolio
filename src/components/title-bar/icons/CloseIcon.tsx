import React from 'react';
import { useTheme } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Icon } from './Icon';
import { IIconProps } from './interfaces';

export const CloseIcon = (props: IIconProps) => {
  const { height = '1rem', width = '1rem' } = props;
  const theme = useTheme();
  return (
    <Icon
      height={height}
      width={width}
      backgroundColor={theme.palette.green.light}
      backgroundColorOnHover={theme.palette.green.dark}
      icon={<CloseRoundedIcon />}
    />
  );
};
