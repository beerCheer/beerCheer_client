import styled from '@emotion/styled';

const EmptyFallback = styled.div`
  text-align: center;
  font-weight: ${props => props.theme['font-semibold']};
`;

const Section = styled.section`
  margin: auto;
  width: 100%;
  padding: 64px 0;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: ${props => props.theme['font-2xl']};
  font-weight: ${props => props.theme['font-bold']};
  text-align: center;
  margin-bottom: 64px;
`;

const CardContainer = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;

  ${props => props.theme.mq.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }

  ${props => props.theme.mq.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export { EmptyFallback, Section, Title, CardContainer };
