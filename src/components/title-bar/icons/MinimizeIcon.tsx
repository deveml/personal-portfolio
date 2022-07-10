import React from 'react';
import { useTheme } from '@mui/material';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import { Icon } from './Icon';
import { IIconProps } from './interfaces';

export const MinimizeIcon = (props: IIconProps) => {
  const { height = '1rem', width = '1rem' } = props;
  const theme = useTheme();
  return (
    <Icon
      height={height}
      width={width}
      backgroundColor={theme.palette.yellow.light}
      backgroundColorOnHover={theme.palette.yellow.dark}
      icon={<MinimizeRoundedIcon />}
    />
  );
};
