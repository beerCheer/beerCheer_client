import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useMediaQuery } from 'react-responsive';

import { loginState } from '../../../recoils/selector/users';
import { loginPopupState } from '../../../recoils/atoms/users';

import { HeaderContainer, HeaderContent, Text, SigninButton, HiddenSearchBar } from './styeld';
import SearchBar from '../searchbar/searchBar';
import Button from '../button';
import LoginPopUp from '../../login/login-pop-up';
import LoginIcon from '../@Icons/loginIcon';
import LogoIcon from '../@Icons/logoIcon';
import OneBeerIcon from '../@Icons/onebeerIcon';
import SearchIcon from '../@Icons/searchIcon';

const Header = () => {
  const { pathname, push } = useRouter();
  const [scroll, setScroll] = React.useState(true);
  const [loginPopupOpen, setLoginPopupOpen] = useRecoilState(loginPopupState);
  const isLogin = useRecoilValue(loginState);

  const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const onScroll = () => {
      let y = window.scrollY;
      if (y >= 450) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer main={pathname === '/' && scroll ? true : false}>
      <HeaderContent>
        {isMobile ? (
          <>
            <OneBeerIcon width={60} height={50} onClick={() => push('/')} />
            <Text onClick={() => push('/list')}>list</Text>
            {pathname === '/' ? <HiddenSearchBar /> : <SearchIcon width={24} height={24} fill={'#cdcdcd'} />}
          </>
        ) : (
          <>
            <LogoIcon width={120} height={55} onClick={() => push('/')} />
            <Text onClick={() => push('/list')}>전체 맥주</Text>
            {pathname === '/' ? <HiddenSearchBar /> : <SearchBar />}
          </>
        )}
        {isLogin ? (
          <Button
            onClick={() => {
              push('/mypage');
            }}
          >
            <LoginIcon width={52} height={52} />
          </Button>
        ) : (
          <SigninButton
            size="large"
            onClick={() => {
              setLoginPopupOpen(true);
            }}
          >
            <LoginIcon width={52} height={52} />
          </SigninButton>
        )}
      </HeaderContent>
      <LoginPopUp onClose={() => setLoginPopupOpen(false)} isOpen={loginPopupOpen} />
    </HeaderContainer>
  );
};

export default Header;
