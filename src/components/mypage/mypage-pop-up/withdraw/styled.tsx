import styled from '@emotion/styled';

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 200px;
`;
export const Title = styled.div`
  color: #200069;
  font-size: 20px;
`;

export const ButtonText = styled.span`
  font-weight: ${props => props.theme['font-semibold']};
  color: ${props => props.theme.color['secondary']};
`;
