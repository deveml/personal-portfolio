import React from 'react';
import { action } from '@storybook/addon-actions';

import { Meta } from '@storybook/react';
import { StyledTerminalInput } from '../TerminalInput';
import { StorybookWrapper } from '../../StorybookWrapper';

export const TerminalInputComponent = () => (
  <StorybookWrapper>
    <StyledTerminalInput onChange={(text) => action(`The text content is ${text}`)} />
  </StorybookWrapper>
);

const meta: Meta<typeof StyledTerminalInput> = {
  title: 'Styled terminal',
  component: TerminalInputComponent,
};

export default meta;
