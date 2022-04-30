import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginNaver } from '../../api/fetcher/users';
import { SITE_URL } from '../../constants';
import { userIdState, userNicknameState } from '../../recoils/atoms/users';

const OauthNaver = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setuserIdState = useSetRecoilState(userIdState);
  const setuserNicknameState = useSetRecoilState(userNicknameState);

  const router = useRouter();

  useEffect(() => {
    async function loginWithNaver() {
      const user = await loginNaver(data);
      setuserIdState(user.id);
      setuserNicknameState(user.nickname);
    }

    loginWithNaver();

    router.replace('/');
  }, []);
  return <div />;
};

export default OauthNaver;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    query: { code, state },
  } = ctx;
  const data = {
    code: code as string,
    redirectUri: `${SITE_URL}/oauth/naver`,
    state: state as string,
  };

  return {
    props: {
      data,
    },
  };
};
