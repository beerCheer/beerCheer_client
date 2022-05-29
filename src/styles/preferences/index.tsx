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

const CardContainer = styled.ul<{ recommend?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const CompletedButton = styled(Button)`
  font-weight: ${props => props.theme['font-semibold']};
  color: white;
  background-color: ${props => props.theme.color.primary};
  margin-bottom: 18px;
  float: right;
`;

const ButtonText = styled.span``;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`;

const Loading = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { Section, CompletedButton, Title, CardContainer, ButtonText, LoadingContainer, Loading, BeerWrapper };
