import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginNaver } from '../../api/fetcher/users';
import { SITE_URL } from '../../constants';
import { userIdState } from '../../recoils/atoms/users';

const OauthNaver = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setuserIdState = useSetRecoilState(userIdState);
  const router = useRouter();
  // const {
  //   query: { code, state },
  // } = router;
  // const data = useMemo(() => {
  //   return {
  //     code: code as string,
  //     redirectUri: `${SITE_URL}/oauth/naver`,
  //     state: state as string,
  //   };
  // }, [code, state]);

  useEffect(() => {
    async function loginWithNaver() {
      const user = await loginNaver(data);
      setuserIdState(user.id);
    }

    //loginWithNaver();
    console.log(data);
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
