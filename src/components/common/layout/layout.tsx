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
      <Header isLogin={false}></Header>
      <HomeWrapper>
        <Content>
          <div>conteasdfntttt</div>
        </Content>
      </HomeWrapper>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default HomeLayout;
