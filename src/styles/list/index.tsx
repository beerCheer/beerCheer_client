import styled from '@emotion/styled';

export const ListContanier = styled.div`
  padding: 30px 16px 100px 16px;
  width: 100%;
  height: 100%;

  & > * {
    margin-bottom: 32px;
  }
`;

export const ListContent = styled.ul`
  display: grid;
  margin: auto;
  font-size: ${props => props.theme['font-lg']};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;

  ${props => props.theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${props => props.theme.mq.phone} {
    grid-template-columns: 1fr;
  }
`;

export const ListTitle = styled.h1`
  font-size: ${props => props.theme['font-2xl']};
  font-weight: ${props => props.theme['font-bold']};
`;
