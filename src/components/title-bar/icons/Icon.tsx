import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { themeConfig } from '../../../config/theme';

export interface IStyledIconProps {
  height: string;
  width: string;
  icon: React.ReactNode;
  backgroundColor: string;
  backgroundColorOnHover: string;
}

const StyledIcon = styled('div')<IStyledIconProps>(
  ({
    height, width, backgroundColor, backgroundColorOnHover,
  }) => ({
    '.iconContainer': {
      height,
      width,
      backgroundColor,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: backgroundColorOnHover,
        '.MuiSvgIcon-root': {
          display: 'flex !important',
          alignSelf: 'center',
          alignItem: 'center',
          justifyContent: 'center',
          justifySelf: 'center',
          width,
          height,
        },
      },
      borderRadius: '50%',
      padding: '3px',
    },
    '.MuiSvgIcon-root': {
      display: 'none',
      color: themeConfig.palette.info.contrastText,
    },
  }),
);

export const Icon = (props: IStyledIconProps) => {
  const { icon } = props;
  return (
    <StyledIcon {...props}>
      <Box className="iconContainer">
        {icon}
      </Box>
    </StyledIcon>
  );
};
