import { GetServerSideProps } from 'next';
import React from 'react';
import { SITE_URL } from '../../constants';

const OauthNaver = () => {
  return <div>OauthNaver</div>;
};

export default OauthNaver;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    query: { code, state },
  } = ctx;
  const data = { code, redirect_uri: `${SITE_URL}/oauth/naver`, state };
  console.log(data);

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
