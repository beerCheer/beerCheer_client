import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchIcon from './searchIcon';

export default {
  Component: SearchIcon,
  title: '검색 아이콘',
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = args => <SearchIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#eeccee',
};
