import { useQuery } from 'react-query';
import { getUserComments } from '../fetcher/mypage';

const MYPAGE_QUERY_KEY = {
  COMMENT: 'COMMENT',
};

export const useUserComments = (id: number) => {
  return useQuery([MYPAGE_QUERY_KEY.COMMENT, { id }], () => getUserComments(), {
    enabled: !!id,
  });
};
