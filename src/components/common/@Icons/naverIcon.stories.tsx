import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NaverIcon from './naverIcon';

export default {
  Component: NaverIcon,
  title: '네이버 아이콘',
} as ComponentMeta<typeof NaverIcon>;

const Template: ComponentStory<typeof NaverIcon> = args => <NaverIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#000000',
};
