import styled from '@emotion/styled';

const Section = styled.section`
  margin: auto;
  width: 100%;
  padding: 64px 0;

  & > * {
    margin-bottom: 32px;
  }
`;

const BeerContainer = styled.section`
  display: flex;
  ${props => props.theme.mq.phone} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.figure`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

const ImageConatiner = styled.div`
  width: 100%;
`;

const BeerRate = styled.span`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const BeerThumnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BeerInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid black;
`;

const BeerInfoContainer = styled.div`
  padding: 16px;
  & > * {
    margin-bottom: 16px;
  }
`;

const BeerName = styled.h1`
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-3xl']};
`;

const DescriptionTitle = styled.h3`
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-2xl']};
`;

export {
  DescriptionTitle,
  BeerName,
  BeerInfoContainer,
  BeerInfoHeader,
  BeerThumnail,
  ImageConatiner,
  BeerContainer,
  Section,
  ImageWrapper,
  BeerRate,
};
