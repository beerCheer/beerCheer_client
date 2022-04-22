import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { HeaderContainer, HeaderContent, Text, SigninText, HiddenSearchBar } from './styeld';
import LogoIcon from '../@Icons/logoIcon';
import LoginIcon from '../@Icons/loginIcon';
import SearchBar from '../searchbar/searchBar';

interface HeaderProps {
  isLogin?: boolean;
  search?: JSX.Element | boolean;
}

const Header = ({ isLogin, search }: HeaderProps) => {
  const router = useRouter();
  const [scroll, setScroll] = React.useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      let y = window.scrollY;
      if (y >= 450) {
        setScroll(prev => false);
      } else {
        setScroll(prev => true);
      }
    });
  });

  return (
    <HeaderContainer main={router.route === '/' && scroll ? 'main' : 'aa'}>
      <HeaderContent>
        <LogoIcon width={120} height={55} onClick={() => router.push('/')} />
        <Text>전체맥주</Text>
        {router.route === '/' ? <HiddenSearchBar /> : <SearchBar />}
        {isLogin ? <LoginIcon width={52} height={52} /> : <SigninText>로그인 / 회원가입</SigninText>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
