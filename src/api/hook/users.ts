import { logout } from './../fetcher/users';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getUserInfo } from '../fetcher/users';

const QUERY_KEY = {
  USERS: 'USERS',
};

export const useUser = (id: number) => {
  return useQuery([QUERY_KEY.USERS, { id }], () => getUserInfo(id), {
    enabled: !!id,
  });
};
