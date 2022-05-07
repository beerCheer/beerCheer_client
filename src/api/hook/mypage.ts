import { useQuery } from 'react-query';
import { getUserFavoritesBeers,getUserComments } from '../fetcher/mypage';
import { USER_QUERY_KEY } from './users';

const MYPAGE_QUERY_KEY = {
  FAVORITES: 'FAVORITES',
    COMMENT: 'COMMENT',

};

export const useFavoritesBeers = () => {
  return useQuery([MYPAGE_QUERY_KEY.FAVORITES, USER_QUERY_KEY.USERS], () => getUserFavoritesBeers());
}


export const useUserComments = () => {
  return useQuery([MYPAGE_QUERY_KEY.COMMENT], () => getUserComments());
};
