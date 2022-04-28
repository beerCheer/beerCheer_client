import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginNaver } from '../../api/fetcher/user';
import { SITE_URL } from '../../constants';
import { loginState, userInfoState } from '../../recoils/login';

const OauthNaver = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setUserInfoState = useSetRecoilState(userInfoState);
  const setLoignState = useSetRecoilState(loginState);
  const router = useRouter();
  useEffect(() => {
    setUserInfoState(user);
    setLoignState(true);
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

  try {
    const res = await loginNaver(data);

    return {
      props: {
        user: res,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
