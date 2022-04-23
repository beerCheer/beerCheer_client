import styled from '@emotion/styled';

export const ListContanier = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 16px 100px 16px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 30px 0px;
`;

export const ListContent = styled.div`
  display: grid;
  z-index: -1;
  font-size: ${props => props.theme['font-lg']};
  grid-template-columns: 1fr;
  grid-gap: 24px;

  ${props => props.theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${props => props.theme.mq.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ListTitle = styled.h1`
  font-size: ${props => props.theme['font-xl']};
`;
