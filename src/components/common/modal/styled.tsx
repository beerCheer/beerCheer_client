import styled from '@emotion/styled';

const ModalWrapper = styled.div<{ open?: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(3px);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 480px;
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: white;
`;

const ModalHeader = styled.header`
  text-align: right;
`;

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalContents = styled.section`
  padding: 8px 0;
`;

export { ModalContents, CloseButton, ModalHeader, ModalContainer, ModalWrapper };
