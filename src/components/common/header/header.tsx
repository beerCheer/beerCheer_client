import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { HeaderContainer, HeaderContent, Text, SigninButton, HiddenSearchBar } from './styeld';
import LogoIcon from '../@Icons/logoIcon';
import LoginIcon from '../@Icons/loginIcon';
import SearchBar from '../searchbar/searchBar';
import { useRecoilState } from 'recoil';
import { loginPopupState } from '../../../recoils/login';
import LoginPopUp from '../../login/login-pop-up';
import Button from '../button';

const Header = () => {
  const { pathname, push } = useRouter();
  const [scroll, setScroll] = React.useState(true);
  const [loginPopupOpen, setLoginPopupOpen] = useRecoilState(loginPopupState);
  const isLogin = false;
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
        <LogoIcon width={120} height={55} onClick={() => push('/')} />
        <Text onClick={() => push('/list')}>전체맥주</Text>
        {pathname === '/' ? <HiddenSearchBar /> : <SearchBar />}
        {isLogin ? (
          <Button>
            <LoginIcon width={52} height={52} />
          </Button>
        ) : (
          <SigninButton
            size="large"
            onClick={() => {
              setLoginPopupOpen(true);
            }}
          >
            로그인 / 회원가입
          </SigninButton>
        )}
      </HeaderContent>
      <LoginPopUp onClose={() => setLoginPopupOpen(false)} isOpen={loginPopupOpen} />
    </HeaderContainer>
  );
};

export default Header;
