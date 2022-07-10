import { Box, styled } from '@mui/material';
import React from 'react';

export interface IStyledIconProps {
  height: string;
  width: string;
  icon: React.ReactNode;
  backgroundColor: string;
  backgroundColorOnHover: string;
}

const StyledIcon = (props: IStyledIconProps) => {
  const { icon } = props;
  return (
    <Box className="iconContainer">
      <Box className="icon">{icon}</Box>
    </Box>
  );
};

export const Icon = styled(StyledIcon)(
  ({
    height, width, backgroundColor, backgroundColorOnHover,
  }) => ({
    height,
    width,
    backgroundColor,
    borderRadius: '1rem',
    '&.iconContainer': {
      padding: '8px',
    },
    '&.icon': {
      display: 'none',
    },
    ':hover': {
      backgroundColor: backgroundColorOnHover,
      '&.icon': {
        display: 'flex !important',
      },
    },
    cursor: 'pointer',
  }),
);
