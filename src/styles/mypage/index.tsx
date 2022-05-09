import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 480px;
  margin: auto;
  width: 100%;
  padding-top: 64px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin: 0 32px;
`;

const ProfileDescription = styled.div`
  width: 100%;
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

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.section`
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

export { ButtonContainer, ProfileContainer, Email, Nickname, ProfileDescription, ProfileImage, Section };
