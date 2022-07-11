import React from 'react';
import { Meta } from '@storybook/react';
import { CloseIcon } from '../CloseIcon';
import { IIconProps } from '../interfaces';

export const CloseIconStory = (props: IIconProps) => <CloseIcon {...props} />;

const meta: Meta<typeof CloseIconStory> = {
  title: 'Icon',
  component: CloseIconStory,
  argTypes: {
    width: {
      defaultValue: '1rem',
      type: 'string',
    },
    height: {
      defaultValue: '1rem',
      type: 'string',
    },
  },
};

export default meta;
