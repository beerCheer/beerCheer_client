import { useRouter } from 'next/router';

import { Container, Title, Text, SigninText } from './Styeld';
import Logo from '../@Icons/Logo';
import LoginIcon from '../@Icons/LoginIcon';
import SearchBar from '../serachbar/Searchbar';

interface HeaderProps {
  isLogin?: boolean;
  main?: string;
  search?: JSX.Element | boolean;
  shadow?: boolean;
}

const Header = ({ isLogin, main, search, shadow }: HeaderProps) => {
  const router = useRouter();

  return (
    <Container shadow={shadow ? 'shadow' : ''}>
      <Logo />
      <Text>전체맥주</Text>
      <SearchBar></SearchBar>

      {isLogin ? <LoginIcon /> : <SigninText>로그인 / 회원가입</SigninText>}
    </Container>
  );
};

export default Header;
