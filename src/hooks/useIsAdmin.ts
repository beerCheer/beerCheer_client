import { useCallback, useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { isValidAdminSelector } from '../recoils/selector/admin';

export function useIsAdmin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const isAdminState = useRecoilValueLoadable(isValidAdminSelector);

  const isAdminCheck = useCallback(() => {
    switch (isAdminState.state) {
      case 'loading':
        setIsLoading(true);
        break;

      case 'hasValue':
        setIsLoading(false);
        setIsAdmin(isAdminState.contents);
        break;

      case 'hasError':
        setIsError(true);
        setIsLoading(false);
        break;

      default:
        return;
    }
  }, [setIsAdmin, isAdminState]);

  useEffect(() => {
    isAdminCheck();
  }, [isAdminCheck]);

  return {
    isLoading,
    isError,
    isAdmin,
  };
}
