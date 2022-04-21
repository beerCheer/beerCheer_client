import { useRouter } from 'next/router';

import { HeaderContainer, HeaderContent, Text, SigninText } from './styeld';
import LogoIcon from '../@Icons/logoIcon';
import LoginIcon from '../@Icons/loginIcon';
import SearchBar from '../serachbar/searchBar';
import Link from 'next/link';

interface HeaderProps {
  isLogin?: boolean;
  main?: string;
  search?: JSX.Element | boolean;
}

const Header = ({ isLogin, main, search }: HeaderProps) => {
  const router = useRouter();

  return (
    <HeaderContainer main={router.route === '/' ? 'main' : ''}>
      <HeaderContent>
        <LogoIcon width={120} height={55} onClick={() => router.push('/')} />
        <Text>전체맥주</Text>
        <SearchBar></SearchBar>
        {isLogin ? <LoginIcon width={52} height={52} /> : <SigninText>로그인 / 회원가입</SigninText>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
