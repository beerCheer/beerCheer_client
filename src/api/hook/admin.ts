import { useQuery } from 'react-query';
import { getCommentList, getUserList } from '../fetcher/admin';
import { IRequestCommentList, IRequestUserList } from '../types/admin';

export const ADMIN_QUERY_KEY = {
  USERLIST: 'USERLIST',
  COMMENTLIST: 'COMMENTLIST',
};

export const useUserListQuery = ({ per_page = 10, page = 1, options }: IRequestUserList) => {
  return useQuery([ADMIN_QUERY_KEY.USERLIST, page], () => getUserList({ page, per_page }), {
    keepPreviousData: true,
    ...options,
  });
};

export const useCommentListQuery = ({ per_page = 10, page = 1, options }: IRequestCommentList) => {
  return useQuery([ADMIN_QUERY_KEY.COMMENTLIST, page], () => getCommentList({ page, per_page }), {
    keepPreviousData: true,
    ...options,
  });
};
