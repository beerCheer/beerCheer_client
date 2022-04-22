import React from 'react';
import { useRouter } from 'next/router';

import Button from '../../components/common/button';
import HomeLayout from '../../components/common/layout/layout';
import {
  ButtonContainer,
  Email,
  Nickname,
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  Section,
} from '../../styles/mypage';

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

export default Mypage;
Mypage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
