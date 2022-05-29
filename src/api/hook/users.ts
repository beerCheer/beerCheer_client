import { useQuery, UseQueryOptions } from 'react-query';
import { getUserInfo } from '../fetcher/users';
import { IUser } from '../types/users';

export const USER_QUERY_KEY = {
  USERS: 'USERS',
};

 export const useUserQuery = (id: number, options?: UseQueryOptions<IUser, any, IUser, any>) => {
  return useQuery([USER_QUERY_KEY.USERS, { id }], () => getUserInfo(id), {
    enabled: !!id,
    ...options,
  });
};
