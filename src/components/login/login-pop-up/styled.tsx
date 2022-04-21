import styled from '@emotion/styled';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalDescription = styled.p`
  margin-top: 36px;
  padding: 0 32px;
  word-break: keep-all;
  text-align: center;
`;
const ButtonText = styled.span`
  vertical-align: super;
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 90px 24px;

  & > * {
    margin-bottom: 16px;
  }
`;

export { ButtonContainer, ButtonText, ModalDescription, ModalContent };
