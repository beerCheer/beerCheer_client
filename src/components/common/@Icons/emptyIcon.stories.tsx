import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmptyIcon from './emptyIcon';

export default {
  Component: EmptyIcon,
  title: 'Commons/Icons/빈컵 아이콘',
} as ComponentMeta<typeof EmptyIcon>;

const Template: ComponentStory<typeof EmptyIcon> = args => <EmptyIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
};
