import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SymbolIcon from './symbolIcon';

export default {
  Component: SymbolIcon,
  title: 'Commons/Icons/로고심볼',
} as ComponentMeta<typeof SymbolIcon>;

const Template: ComponentStory<typeof SymbolIcon> = args => <SymbolIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 50,
  height: 50,
  onClick: () => {
    alert('clicked');
  },
  fill: '#eeccee',
};
