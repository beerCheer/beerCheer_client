import { IRequestAllBeers, IRequestBeer, IRequestBeerComments } from './../types/beers/index';
import { getAllBeers, getBeer, getBeerComments, getRatesBeer } from './../fetcher/beers';
import { useQuery, useInfiniteQuery } from 'react-query';

const QUERY_KEY = {
  BEERS: 'BEERS',
  COMMENTS: 'COMMENTS',
};

export const useAllBeers = ({ page = 1, per_page, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  // back api 수정 필요
  return useInfiniteQuery(
    [QUERY_KEY.BEERS, page, per_page, isPreferenceOrRateChecked],
    ({ pageParam }) => getAllBeers({ page: pageParam, per_page, isPreferenceOrRateChecked }),
    {
      getNextPageParam: () => {},
    }
  );
};

export const useBeerComments = ({ page, per_page, beerId }: IRequestBeerComments) => {
  return useQuery(
    [QUERY_KEY.BEERS, QUERY_KEY.COMMENTS, page, per_page, beerId],
    () => getBeerComments({ page, per_page, beerId }),
    { enabled: !!beerId }
  );
};

export const useBeer = ({ id, beerId }: IRequestBeer) => {
  return useQuery([QUERY_KEY.BEERS, id, beerId], () => getBeer({ id, beerId }), {
    enabled: !!beerId,
  });
};

export const useRatesBeer = () => {
  return useQuery([QUERY_KEY.BEERS], () => getRatesBeer());
};
