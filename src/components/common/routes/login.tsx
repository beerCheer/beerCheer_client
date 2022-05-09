import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../recoils/selector/users';
import { RouteProps } from './admin';

const LoginRoute = ({ children }: RouteProps) => {
  const router = useRouter();
  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLogin) {
      router.replace('/');
    }
  }, []);
  return <>{children}</>;
};

export default LoginRoute;
