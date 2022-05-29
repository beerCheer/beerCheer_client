import { BEER_QUERY_KEY } from './beers';
import { useQuery } from 'react-query';
import { getUserFavoritesBeers, getUserComments, getUserRates } from '../fetcher/mypage';
import { USER_QUERY_KEY } from './users';

const MYPAGE_QUERY_KEY = {
  FAVORITES: 'FAVORITES',
  COMMENT: 'COMMENT',
  RATES: 'RATES',
};

export const useFavoritesBeers = () => {
  return useQuery([BEER_QUERY_KEY.BEERS, MYPAGE_QUERY_KEY.FAVORITES, USER_QUERY_KEY.USERS], () =>
    getUserFavoritesBeers()
  );
};

export const useUserComments = () => {
  return useQuery([MYPAGE_QUERY_KEY.COMMENT, USER_QUERY_KEY.USERS], () => getUserComments());
};

export const useUserRates = () => {
  return useQuery([MYPAGE_QUERY_KEY.RATES, USER_QUERY_KEY.USERS], () => getUserRates());
};
