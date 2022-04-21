import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoIcon from './logoIcon';

export default {
  Component: LogoIcon,
  title: '로고',
} as ComponentMeta<typeof LogoIcon>;

const Template: ComponentStory<typeof LogoIcon> = args => <LogoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 160,
  height: 55,
  onClick: () => {
    alert('clicked');
  },
};
