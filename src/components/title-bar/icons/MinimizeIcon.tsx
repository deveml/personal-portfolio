import React from 'react';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded'; import { Icon } from './Icon';
import { IIconProps } from './interfaces';
import { themeConfig } from '../../../config/theme';

export const MinimizeIcon = (props: IIconProps) => {
  const { height = '0.5rem', width = '0.5rem' } = props;
  return (
    <Icon
      height={height}
      width={width}
      backgroundColor={themeConfig.palette.yellow.main}
      backgroundColorOnHover={themeConfig.palette.yellow.dark}
      icon={<CloseFullscreenRoundedIcon />}
    />
  );
};
