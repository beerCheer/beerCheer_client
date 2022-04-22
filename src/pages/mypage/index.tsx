import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/common/button';
import HomeLayout from '../../components/common/layout/layout';

const background = '#F8F7F5';
const tertiary = '#F0E5CF';
const Mypage = () => {
  const router = useRouter();
  return (
    <Section>
      <ProfileContainer>
        <ProfileImage src="https://picsum.photos/200" alt="" />
        <ProfileDescription>
          <Nickname>닉네임우하하</Nickname>
          <Email>useremail@email.com</Email>
          <Button
            primary
            size="small"
            color={tertiary}
            onClick={() => {
              router.push('/mypage/profile');
            }}
          >
            프로필 수정
          </Button>
        </ProfileDescription>
      </ProfileContainer>
      <ButtonContainer>
        <Button
          primary
          block
          color={background}
          size="large"
          onClick={() => {
            router.push('/mypage/beers');
          }}
        >
          나의 맥주 창고
        </Button>
        <Button
          primary
          block
          color={background}
          size="large"
          onClick={() => {
            router.push('/mypage/comments');
          }}
        >
          나의 한마디
        </Button>
        <Button
          primary
          block
          color={background}
          size="large"
          onClick={() => {
            router.push('/mypage/rates');
          }}
        >
          나의 평가
        </Button>
        <Button
          primary
          block
          color={background}
          size="large"
          onClick={() => {
            router.push('/mypage/recommend');
          }}
        >
          나를 위한 추천 맥주
        </Button>
      </ButtonContainer>
    </Section>
  );
};

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

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default Mypage;
Mypage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
