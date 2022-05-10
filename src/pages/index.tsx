import React from 'react';
import HomeLayout from '../components/common/layout/layout';
import Main from '../components/main';

const Home = () => {
  return <Main />;
};

export default Home;
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
