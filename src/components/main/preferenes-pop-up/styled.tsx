import styled from '@emotion/styled';

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 230px;
`;
export const Title = styled.div`
  font-size: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ff9900;
  width: 140px;
  height: 90px;
  color: white;
  text-align: center;
  border-radius: 50px;
  font-size: 14px;
  border: none;
`;

export const Icon = styled.div`
  position: absolute;
  top: -50px;
  left: 40px;
`;
