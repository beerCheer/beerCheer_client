import styled from '@emotion/styled';

interface ImageProps {
  image?: string;
}

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 274px;
`;

export const BeerImage = styled.div<ImageProps>`
  position: relative;
  width: 274px;
  height: 240px;
  background-image: url(${props => props.image || ''});
  background-size: cover;
`;

export const Icon = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const BeerInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const BeerName = styled.div``;

export const BeerScore = styled.div``;
