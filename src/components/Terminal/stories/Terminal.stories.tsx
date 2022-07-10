import React from 'react';
import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';
import { StorybookWrapper } from '../../StorybookWrapper';
import { ITerminalInputProps, StyledTerminalInput } from '../TerminalInput';

export const TerminalInputComponent = (args: ITerminalInputProps) => (
  <StorybookWrapper>
    <StyledTerminalInput {...args} onChange={(text) => action(`Text change: ${text}`)} />
  </StorybookWrapper>
);

const meta: Meta<typeof StyledTerminalInput> = {
  title: 'Styled terminal',
  component: TerminalInputComponent,
};

export default meta;
