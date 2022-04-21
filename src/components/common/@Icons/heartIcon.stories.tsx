import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeartIcon from './heartIcon';

export default {
  Component: HeartIcon,
  title: 'Commons/Icons/하트 아이콘',
} as ComponentMeta<typeof HeartIcon>;

const Template: ComponentStory<typeof HeartIcon> = args => <HeartIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#F0E5CF',
};
