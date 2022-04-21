import CloseIcon from '../@Icons/closeIcon';
import { CloseButton, ModalContainer, ModalContents, ModalHeader, ModalWrapper } from './styled';

interface ModalProps {
  isOpen: boolean;
  close?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen = false, close = true, onClose, children }: ModalProps) => {
  return (
    <ModalWrapper open={isOpen} onClick={onClose}>
      <ModalContainer
        onClick={e => {
          e.preventDefault();
        }}
      >
        {close && (
          <ModalHeader>
            <CloseButton type="button" onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
        )}
        <ModalContents>{children}</ModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
