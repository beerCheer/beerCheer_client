import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useUserQuery } from '../../../api/hook/users';
import { userIdState } from '../../../recoils/atoms/users';

export interface RouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: RouteProps) => {
  const router = useRouter();
  const userId = useRecoilValue(userIdState);

  useUserQuery(userId as number, {
    onSuccess: data => {
      if (!data.isAdmin) {
        router.replace('/');
        return;
      }
    },
  });

  useEffect(() => {
    if (!userId) router.replace('/');
  }, [userId]);

  return <>{children}</>;
};

export default AdminRoute;
