import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginKakao } from '../../api/fetcher/users';
import { SITE_URL } from '../../constants';
import { userIdState } from '../../recoils/atoms/users';

const OauthKakao = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setuserIdState = useSetRecoilState(userIdState);
  const router = useRouter();

  useEffect(() => {
    async function loginWithKakao() {
      const user = await loginKakao(data);
      setuserIdState(user.id);
    }
    loginWithKakao();

    router.replace('/');
  }, []);

  return <div />;
};

export default OauthKakao;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    query: { code },
  } = ctx;

  const data = {
    code: code as string,
    redirectUri: `${SITE_URL}/oauth/kakao`,
  };

  return {
    props: {
      data,
    },
  };
};
