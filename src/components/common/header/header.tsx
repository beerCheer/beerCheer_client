import { useRouter } from 'next/router';

import { HeaderContainer, HeaderContent, Text, SigninText } from './styeld';
import LogoIcon from '../@Icons/logoIcon';
import LoginIcon from '../@Icons/loginIcon';
import SearchBar from '../serachbar/searchBar';

interface HeaderProps {
  isLogin?: boolean;
  main?: string;
  search?: JSX.Element | boolean;
}

const Header = ({ isLogin, main, search }: HeaderProps) => {
  const { route } = useRouter();

  return (
    <HeaderContainer>
      <HeaderContent main={route === '/' ? 'main' : ''}>
        <LogoIcon width={160} height={55} />
        <Text>전체맥주</Text>
        <SearchBar></SearchBar>
        {isLogin ? <LoginIcon width={52} height={52} /> : <SigninText>로그인 / 회원가입</SigninText>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
