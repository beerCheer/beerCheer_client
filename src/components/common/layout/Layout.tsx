import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import { HomeContainer, Content, HomeWrapper } from './styled';

interface HomeLayoutProps {
  children?: React.ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Header isLogin={false}></Header>
        <Content>
          <div>contentttt</div>
        </Content>
      </HomeWrapper>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default HomeLayout;
