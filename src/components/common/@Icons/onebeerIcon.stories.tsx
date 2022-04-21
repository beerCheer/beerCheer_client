import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OneBeerIcon from './onebeerIcon';

export default {
  Component: OneBeerIcon,
  title: 'Commons/Icons/맥주 한개 아이콘',
} as ComponentMeta<typeof OneBeerIcon>;

const Template: ComponentStory<typeof OneBeerIcon> = args => <OneBeerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 64,
  height: 64,
  onClick: () => {
    alert('clicked');
  },
};
