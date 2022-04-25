import styled from '@emotion/styled';

import Button from '../../components/common/button';

const Section = styled.section`
  width: 100%;
  padding: 64px 16px;
  max-width: 1200px;
  margin: auto;
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

const CardContainer = styled.article`
  display: grid;
  grid-gap: 24px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

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

export { Section, CompletedButton, Title, CardContainer, ButtonText };
