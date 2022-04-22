import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from '.';

export default {
  Component: TextInput,
  title: 'Commons/Form/TextInput',
  args: {
    label: '',
    value: '',
    id: '',
    handleOnChange: (newValue: string) => {},
    errorMessage: '',
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '이름',
  id: 'input-sample',
  placeholder: '이름을 입력하세요',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '이름',
  id: 'input-sample',
  value: '내이름',
  disabled: true,
};
