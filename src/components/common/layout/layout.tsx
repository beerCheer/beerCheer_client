// import React from 'react';
import { useRouter } from 'next/router';

import Header from '../header/header';
import Footer from '../footer/footer';
import { HomeContainer, Content, HomeWrapper, BackGround } from './styled';
import SearchBar from '../searchbar/searchBar';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <HomeContainer>
      {pathname === '/' ? (
        <BackGround>
          <SearchBar />
        </BackGround>
      ) : (
        ''
      )}
      <Header isLogin={false}></Header>
      <HomeWrapper>
        <Content padding={pathname === '/' ? 'main' : ''}>{children}</Content>
      </HomeWrapper>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default HomeLayout;
