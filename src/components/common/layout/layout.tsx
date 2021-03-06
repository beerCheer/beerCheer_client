// import React from 'react';
import { useRouter } from 'next/router';

import Header from '../header/header';
import Footer from '../footer/footer';
import { Content, Background } from './styled';
import SearchBar from '../searchbar/searchBar';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === '/' && (
        <Background>
          <SearchBar />
        </Background>
      )}
      <Header />
      <Content padding={pathname === '/' ? 'main' : ''}>{children}</Content>
      <Footer />
    </>
  );
};

export default HomeLayout;
