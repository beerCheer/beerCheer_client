import { useQuery } from 'react-query';
import { getUserFavoritesBeers, getUserComments, getUserRates } from '../fetcher/mypage';
import { USER_QUERY_KEY } from './users';

const MYPAGE_QUERY_KEY = {
  FAVORITES: 'FAVORITES',
  COMMENT: 'COMMENT',
  RATES: 'RATES',
};

export const useFavoritesBeers = () => {
  return useQuery([MYPAGE_QUERY_KEY.FAVORITES, USER_QUERY_KEY.USERS], () => getUserFavoritesBeers());
};

export const useUserComments = () => {
  return useQuery([MYPAGE_QUERY_KEY.COMMENT], () => getUserComments());
};

export const useUserRates = () => {
  return useQuery([MYPAGE_QUERY_KEY.RATES], () => getUserRates());
};
