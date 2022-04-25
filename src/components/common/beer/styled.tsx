import styled from '@emotion/styled';

interface BeerContainerProps {
  id?: string;
  seleteBeer?: boolean;
  pathname?: string;
}

export const BeerContainer = styled.div<BeerContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 274px;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${props => (props.pathname !== '/preferences' ? 1 : props.seleteBeer ? 1 : 0.5)};
`;

export const Thumnail = styled.img`
  max-width: 274px;
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

export const Description = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BeerName = styled.p``;

export const BeerScore = styled.div``;
