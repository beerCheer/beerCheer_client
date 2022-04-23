import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowLeftIcon from './arrowLeftIcon';

export default {
  Component: ArrowLeftIcon,
  title: 'Commons/Icons/왼쪽화살표 아이콘',
} as ComponentMeta<typeof ArrowLeftIcon>;

const Template: ComponentStory<typeof ArrowLeftIcon> = args => <ArrowLeftIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#000000',
};
