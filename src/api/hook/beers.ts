import { IRequestAllBeers, IRequestBeer, IRequestBeerComments } from './../types/beers/index';
import { getAllBeers, getBeer, getBeerComments } from './../fetcher/beers';
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

export const useBeerComments = ({ beerId, per_page }: IRequestBeerComments) => {
  return useInfiniteQuery(
    [QUERY_KEY.BEERS, QUERY_KEY.COMMENTS, beerId],
    ({ pageParam }) => getBeerComments({ beerId, page: pageParam, per_page }),
    {
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage > lastPage.totalPages ? undefined : nextPage;
      },
      enabled: !!beerId,
    }
  );
};

export const useBeer = ({ id, beerId }: IRequestBeer) => {
  return useQuery([QUERY_KEY.BEERS, id, beerId], () => getBeer({ id, beerId }), {
    enabled: !!beerId,
  });
};
