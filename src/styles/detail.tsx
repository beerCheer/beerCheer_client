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
  padding: 0 24px;
  ${props => props.theme.mq.tablet} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.figure`
  width: 320px;
  height: 320px;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.color.option}50;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  position: relative;

  ${props => props.theme.mq.tablet} {
    width: 100%;
  }
`;

const BeerRate = styled.span`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const BeerThumnail = styled.img`
  margin: auto;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const BeerInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.color.option}50;
`;

const BeerInfoContainer = styled.div`
  flex: 1;
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

const RateTitle = styled.h4`
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-xl']};
  margin-bottom: 8px;
`;

export {
  DescriptionTitle,
  BeerName,
  BeerInfoContainer,
  BeerInfoHeader,
  BeerThumnail,
  BeerContainer,
  Section,
  ImageWrapper,
  BeerRate,
  RateTitle,
};
