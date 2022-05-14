import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { useUserQuery } from '../api/hook/users';
import { userIdState } from '../recoils/atoms/users';
import { loginState } from '../recoils/selector/users';

export function useIsValidAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);

  const userId = useRecoilValue(userIdState);
  const isLogin = useRecoilValue(loginState);

  useUserQuery(userId as number, {
    onSuccess: data => {
      if (!!isLogin && !!data.isAdmin) {
        setIsAdmin(true);
      }
    },
  });

  return isAdmin;
}
