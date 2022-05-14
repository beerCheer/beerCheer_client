import styled from '@emotion/styled';

export const BeerContainer = styled.li`
  max-width: 270px;
  cursor: pointer;
  flex: 1;
`;

export const BeerImage = styled.img`
  width: 150px;
  width: 150px;
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

export const BeerName = styled.span`
  padding: 8px 0;
  font-weight: ${props => props.theme['font-medium']};
`;

export const BeerScore = styled.span`
  display: block;
  color: white;
  bottom: 5%;
  left: 5%;
  position: absolute;
  width: fit-content;
  border-radius: 8px;
  background-color: ${props => props.theme.color.primary};
  padding: 8px;
`;

export const ImageWrapper = styled.figure`
  width: 270px;
  height: 270px;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.color.option}50;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  position: relative;
`;

export const BeerThumnail = styled.img`
  margin: auto;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
