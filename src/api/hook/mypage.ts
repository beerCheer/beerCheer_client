import { useQuery } from 'react-query';
import { getUserFavoritesBeers } from '../fetcher/mypage';
import { USER_QUERY_KEY } from './users';

const MYPAGE_QUERY_KEY = {
  FAVORITES: 'FAVORITES',
};

export const useFavoritesBeers = () => {
  return useQuery([MYPAGE_QUERY_KEY.FAVORITES, USER_QUERY_KEY.USERS], () => getUserFavoritesBeers());
};
