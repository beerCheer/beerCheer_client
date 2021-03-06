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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const ListTitle = styled.h1`
  font-size: ${props => props.theme['font-2xl']};
  font-weight: ${props => props.theme['font-bold']};
`;

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: calc(100vh - 300px);

  & > div {
    font-size: ${props => props.theme['font-2xl']};
    color: #de4343;
  }
`;

export const EmptyListImage = styled.img`
  width: 70%;
  height: 70%;
`;
