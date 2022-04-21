import { useRouter } from 'next/router';

import { HeaderContainer, HeaderContent, Text, SigninText } from './styeld';
import LogoIcon from '../@Icons/logoIcon';
import LoginIcon from '../@Icons/loginIcon';
import SearchBar from '../serachbar/searchBar';

interface HeaderProps {
  isLogin?: boolean;
  search?: JSX.Element | boolean;
}

const Header = ({ isLogin, search }: HeaderProps) => {
  const router = useRouter();

  return (
    <HeaderContainer main={router.route === '/' ? 'main' : ''}>
      <HeaderContent>
        <LogoIcon width={120} height={55} onClick={() => router.push('/')} />
        <Text>전체맥주</Text>
        {router.route === '/' ? '' : <SearchBar />}
        {isLogin ? <LoginIcon width={52} height={52} /> : <SigninText>로그인 / 회원가입</SigninText>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
