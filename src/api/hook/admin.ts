import { useQuery } from 'react-query';
import { getUserList } from '../fetcher/admin';
import { IRequestUserList } from '../types/admin';

export const ADMIN_QUERY_KEY = {
  USERSLIST: 'USERSLIST',
  COMMENTSLIST: 'COMMENTSLIST',
};

export const useUserListQuery = ({ per_page = 10, page = 1, options }: IRequestUserList) => {
  return useQuery([ADMIN_QUERY_KEY.USERSLIST, page], () => getUserList({ page, per_page }), {
    keepPreviousData: true,
    ...options,
  });
};
