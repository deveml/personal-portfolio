import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Icon } from './Icon';
import { IIconProps } from './interfaces';
import { themeConfig } from '../../../config/theme';

export const CloseIcon = (props: IIconProps) => {
  const { height = '0.5rem', width = '0.5rem' } = props;
  return (
    <Icon
      height={height}
      width={width}
      backgroundColor={themeConfig.palette.red.main}
      backgroundColorOnHover={themeConfig.palette.red.dark}
      icon={<CloseRoundedIcon />}
    />
  );
};
