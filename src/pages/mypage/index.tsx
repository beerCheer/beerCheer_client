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
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userIdState } from '../../recoils/atoms/users';
import { USER_QUERY_KEY, useUserQuery } from '../../api/hook/users';
import theme from '../../styles/theme';
import { useQueryClient } from 'react-query';
import { logout } from '../../api/fetcher/users';
import LoginRoute from '../../components/common/routes/login';

const Mypage = () => {
  const queryClient = useQueryClient();
  const userId = useRecoilValue(userIdState);
  const resetUserId = useResetRecoilState(userIdState);
  const { data } = useUserQuery(userId as number);
  const router = useRouter();

  const handleLogout = async () => {
    async function logoutUser() {
      try {
        await logout();
        resetUserId();
        queryClient.removeQueries(USER_QUERY_KEY.USERS);
      } catch (error) {
        alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
      }
      router.replace('/');
    }

    logoutUser();
  };

  return (
    <Section>
      <ProfileContainer>
        <ProfileImage src="https://picsum.photos/200" alt="" />
        <ProfileDescription>
          <Nickname>{data?.nickname}</Nickname>
          <Email>{data?.email}</Email>
          <Button
            primary
            size="small"
            color={theme.color.tertiary}
            onClick={() => {
              router.push('/mypage/profile');
            }}
          >
            프로필 수정
          </Button>
          <Button primary size="small" color={theme.color.tertiary} onClick={handleLogout}>
            로그아웃
          </Button>
        </ProfileDescription>
      </ProfileContainer>
      <ButtonContainer>
        <Button
          primary
          block
          color={theme.color['bg-color']}
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
          color={theme.color['bg-color']}
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
          color={theme.color['bg-color']}
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
          color={theme.color['bg-color']}
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
  return (
    <HomeLayout>
      <LoginRoute>{page}</LoginRoute>
    </HomeLayout>
  );
};
