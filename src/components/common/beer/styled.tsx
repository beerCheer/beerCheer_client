import styled from '@emotion/styled';

export const BeerContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

export const BeerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BeerInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BeerName = styled.span`
  padding: 8px 0;
  font-weight: ${props => props.theme['font-medium']};
`;

export const BeerScore = styled.span`
  flex-shrink: 0;
`;
