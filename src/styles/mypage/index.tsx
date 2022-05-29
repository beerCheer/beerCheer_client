import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 480px;
  margin: auto;
  width: 100%;
  padding-top: 64px;
`;

const ProfileDescription = styled.div`
  width: 100%;
  ${props => props.theme.mq.phone} {
    width: 80%;
    margin: auto;
  }
`;
const Nickname = styled.p`
  font-weight: ${props => props.theme['font-bold']};
  font-size: ${props => props.theme['font-2xl']};
  margin-bottom: 8px;
`;

const Email = styled.p`
  font-size: ${props => props.theme['font-sm']};
  margin-bottom: 16px;
`;

const MenuContainer = styled.section`
  padding: 24px 0;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${props => props.theme.mq.phone} {
    width: 80%;
    margin: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    margin-right: 16px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export { MenuContainer, Email, Nickname, ProfileDescription, Section, ButtonContainer };
