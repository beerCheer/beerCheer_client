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
  const { pathname, push } = useRouter();
  const [scroll, setScroll] = React.useState(true);

  console.log(pathname);

  useEffect(() => {
    const onScroll = () => {
      let y = window.scrollY;
      if (y >= 450) {
        setScroll(prev => false);
      } else {
        setScroll(prev => true);
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer main={pathname === '/' && scroll ? true : false}>
      <HeaderContent>
        <LogoIcon width={120} height={55} onClick={() => push('/mypage')} />
        <Text>전체맥주</Text>
        {pathname === '/' ? <HiddenSearchBar /> : <SearchBar />}
        {isLogin ? <LoginIcon width={52} height={52} /> : <SigninText>로그인 / 회원가입</SigninText>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
