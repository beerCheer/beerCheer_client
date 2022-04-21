import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloseIcon from './closeIcon';

export default {
  Component: CloseIcon,
  title: '닫기 아이콘',
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = args => <CloseIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#000000',
};
