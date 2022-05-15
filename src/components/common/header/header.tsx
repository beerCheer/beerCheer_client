import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';

import { loginState } from '../../../recoils/selector/users';
import { loginPopupState } from '../../../recoils/atoms/users';
import { useIsTablet } from '../../../hooks/useIsTablet';

import { HeaderContainer, HeaderContent, Text, SigninButton, HiddenSearchBar, Icon, Span } from './styeld';
import SearchBar from '../searchbar/searchBar';
import Button from '../button';
import LoginPopUp from '../../login/login-pop-up';
import LoginIcon from '../@Icons/loginIcon';
import LogoIcon from '../@Icons/logoIcon';
import TwoBeerIcon from '../@Icons/twobeerIcon';

const Header = () => {
  const { pathname, push } = useRouter();
  const [scroll, setScroll] = React.useState(true);
  const [loginPopupOpen, setLoginPopupOpen] = useRecoilState(loginPopupState);
  const isLogin = useRecoilValue(loginState);
  const isTablet = useIsTablet();

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
        <Icon>
          {isTablet ? (
            <TwoBeerIcon
              width={60}
              height={50}
              onClick={() => push('/')}
              fill={pathname === '/' && scroll ? '#FFFDE7' : '#363636'}
            />
          ) : (
            <LogoIcon width={120} height={55} onClick={() => push('/')} />
          )}
        </Icon>
        <Text onClick={() => push('/list')}>전체 맥주</Text>
        {pathname === '/' ? <HiddenSearchBar /> : <SearchBar />}

        {isLogin ? (
          <Button
            onClick={() => {
              push('/mypage');
            }}
          >
            <LoginIcon width={46} height={46} />
          </Button>
        ) : (
          <SigninButton
            size="large"
            onClick={() => {
              setLoginPopupOpen(true);
            }}
          >
            <Span main={pathname === '/' && scroll ? true : false}> 로그인 / 회원가입</Span>
          </SigninButton>
        )}
      </HeaderContent>
      <LoginPopUp onClose={() => setLoginPopupOpen(false)} isOpen={loginPopupOpen} />
    </HeaderContainer>
  );
};

export default Header;
