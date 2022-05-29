import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 480px;
  margin: auto;
  width: 100%;
  padding-top: 64px;

  ${props => props.theme.mq.phone} {
    width: 80%;
    margin: auto;
  }
`;

const StyledForm = styled.form`
  & > * {
    margin-bottom: 16px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ResignButtonContainer = styled.div`
  padding: 32px 0 8px;
  text-align: right;
`;

const Title = styled.h2`
  font-size: ${props => props.theme['font-2xl']};
  font-weight: ${props => props.theme['font-bold']};
  text-align: center;
  margin-bottom: 64px;
`;

export { Title, ResignButtonContainer, StyledForm, Section };
