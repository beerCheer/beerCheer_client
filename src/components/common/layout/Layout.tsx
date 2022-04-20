import React from 'react';

import Header from '../header/Header';
import { Container } from './Styled';

interface HomeLayoutProps {
  children?: React.ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Container>
      <Header isLogin={false} shadow></Header>
      {children}
    </Container>
  );
};

export default HomeLayout;
