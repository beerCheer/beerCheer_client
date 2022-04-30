import Modal, { ModalProps } from '../../common/modal';
import { ModalContent, Title } from './styled';

type NicknamePopupProps = Omit<ModalProps, 'children'>;

const NicknamePopup = ({ onClose, isOpen }: NicknamePopupProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Title>닉네임 변경 완료 !</Title>
      </ModalContent>
    </Modal>
  );
};

export default NicknamePopup;
