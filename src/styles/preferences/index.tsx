import styled from '@emotion/styled';

import Button from '../../components/common/button';

const Section = styled.section`
  width: 100%;
  padding: 64px 16px;
  max-width: 1200px;
  margin: auto;
`;

const BeerWrapper = styled.div<{ selected?: boolean }>`
  opacity: ${props => (props.selected ? 1 : 0.5)};
`;

const Title = styled.header`
  font-size: ${props => props.theme['font-2xl']};
  font-weight: ${props => props.theme['font-bold']};
  text-align: center;
  margin-bottom: 24px;

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme['font-xl']};
  }
`;

const CardContainer = styled.article<{ recommend?: boolean }>`
  display: grid;
  grid-gap: 24px;
  width: 100%;

  grid-template-columns: ${props => (props.recommend ? `332px 332px ` : `1fr 1fr 1fr`)};
  justify-content: space-around;
  padding: 0px 24px;

  ${props => props.theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const CompletedButton = styled(Button)`
  font-weight: ${props => props.theme['font-semibold']};
  color: white;
  background-color: ${props => props.theme['mainColor']};
  margin-bottom: 18px;
  float: right;
`;

const ButtonText = styled.span``;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9e9ec7;
  height: calc(100vh - 300px);
`;

const Loading = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { Section, CompletedButton, Title, CardContainer, ButtonText, LoadingContainer, Loading, BeerWrapper };
