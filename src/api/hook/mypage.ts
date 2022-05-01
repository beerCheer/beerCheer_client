import { useQuery } from 'react-query';
import { getUserFavoritesBeers } from '../fetcher/mypage';

const MYPAGE_QUERY_KEY = {
  FAVORITES: 'FAVORITES',
};

export const useFavoritesBeers = (id: number) => {
  return useQuery([MYPAGE_QUERY_KEY.FAVORITES, { id }], () => getUserFavoritesBeers(), {
    enabled: !!id,
  });
};
