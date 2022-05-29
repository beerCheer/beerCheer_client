import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '.';
import { useArgs } from '@storybook/client-api';

export default {
  Component: Modal,
  title: 'Commons/모달',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ onClose, close, ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <div>
      <button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</button>
      <Modal onClose={handleClose} close={close} {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
  onClose: () => {},
  children: '모달 컨텐츠',
  close: true,
};
