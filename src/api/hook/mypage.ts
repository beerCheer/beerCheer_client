import { useQuery } from 'react-query';
import { getUserComments } from '../fetcher/mypage';

const MYPAGE_QUERY_KEY = {
  COMMENT: 'COMMENT',
};

export const useUserComments = () => {
  return useQuery([MYPAGE_QUERY_KEY.COMMENT], () => getUserComments());
};
