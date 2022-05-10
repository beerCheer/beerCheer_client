import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../recoils/selector/users';

interface RouteProps {
  children: React.ReactNode;
}

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
