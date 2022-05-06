import { useQuery } from 'react-query';
import { getUserInfo } from '../fetcher/users';

export const USER_QUERY_KEY = {
  USERS: 'USERS',
};

export const useUserQuery = (id: number) => {
  return useQuery([USER_QUERY_KEY.USERS, { id }], () => getUserInfo(id), {
    enabled: !!id,
  });
};
