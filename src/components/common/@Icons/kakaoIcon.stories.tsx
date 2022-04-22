import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import KakaoIcon from './kakaoIcon';

export default {
  Component: KakaoIcon,
  title: 'Commons/Icons/카카오 아이콘',
} as ComponentMeta<typeof KakaoIcon>;

const Template: ComponentStory<typeof KakaoIcon> = args => <KakaoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
  fill: '#000000',
};
