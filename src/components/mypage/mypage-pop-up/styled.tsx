import styled from '@emotion/styled';

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const Title = styled.h1`
  font-weight: ${props => props.theme['font-semibold']};
  font-size: ${props => props.theme['font-lg']};
`;
