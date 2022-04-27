import { GetServerSideProps } from 'next';
import React from 'react';
import { loginNaver } from '../../api/fetcher/user';
import { IRequestLoginNaver } from '../../api/types/users';
import { SITE_URL } from '../../constants';

const OauthNaver = () => {
  return <div>OauthNaver</div>;
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
    console.log(res);
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
