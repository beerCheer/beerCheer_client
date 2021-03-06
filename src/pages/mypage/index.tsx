import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useQueryClient } from 'react-query';

import { USER_QUERY_KEY, useUserQuery } from '../../api/hook/users';
import { logout } from '../../api/fetcher/users';
import { userIdState } from '../../recoils/atoms/users';

import Button from '../../components/common/button';
import HomeLayout from '../../components/common/layout/layout';
import { MenuContainer, Email, Nickname, ButtonContainer, ProfileDescription, Section } from '../../styles/mypage';
import theme from '../../styles/theme';

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
      <ProfileDescription>
        <Nickname>{data?.nickname}</Nickname>
        <Email>{data?.email}</Email>
        <ButtonContainer>
          <Button
            primary
            size="small"
            block
            color={theme.color.tertiary}
            onClick={() => {
              router.push('/mypage/profile');
            }}
          >
            프로필 수정
          </Button>
          <Button primary size="small" block color={theme.color['tertiary-light']} onClick={handleLogout}>
            로그아웃
          </Button>
        </ButtonContainer>
      </ProfileDescription>

      <MenuContainer>
        <Button
          primary
          block
          color={theme.color['bg-color']}
          size="large"
          onClick={() => {
            router.push('/mypage/favorites');
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
      </MenuContainer>
    </Section>
  );
};

export default Mypage;
Mypage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
