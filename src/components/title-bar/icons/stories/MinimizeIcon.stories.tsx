import React from 'react';
import { Meta } from '@storybook/react';
import { MinimizeIcon } from '../MinimizeIcon';
import { IIconProps } from '../interfaces';

export const MinimizeIconStory = (props: IIconProps) => <MinimizeIcon {...props} />;

const meta: Meta<typeof MinimizeIconStory> = {
  title: 'Icon',
  component: MinimizeIconStory,
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
