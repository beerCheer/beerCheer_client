import styled from '@emotion/styled';

const EmptyFallback = styled.div`
  margin: auto;
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

  ${props => props.theme.mq.phone} {
    font-size: 18px;
  }
`;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export { EmptyFallback, Section, Title, CardContainer };
