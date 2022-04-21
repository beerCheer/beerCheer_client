import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import LoginPopUp from '.';

export default {
  Component: LoginPopUp,
  title: 'Login/로그인팝업',
} as ComponentMeta<typeof LoginPopUp>;

const Template: ComponentStory<typeof LoginPopUp> = ({ onClose, close, ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <div>
      <button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</button>
      <LoginPopUp onClose={handleClose} close={close} {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
  onClose: () => {},
};
