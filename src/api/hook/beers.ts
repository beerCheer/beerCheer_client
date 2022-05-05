import { flatten } from 'lodash';
import { IPagination } from './../index';
import {
  IBeer,
  IRequestAllBeers,
  IRequestBeer,
  IRequestBeerComments,
  IRequestSearchBeer,
} from './../types/beers/index';
import { getAllBeers, getBeer, getBeerComments, getRatesBeer, getSearchBeer } from './../fetcher/beers';
import { useQuery, useInfiniteQuery } from 'react-query';

const QUERY_KEY = {
  BEERS: 'BEERS',
  COMMENTS: 'COMMENTS',
  RATES: 'RATES',
  PREFERENCE: 'PREFERENCE',
};

export const useAllBeers = ({ per_page, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  return useInfiniteQuery(
    [QUERY_KEY.BEERS, { per_page, isPreferenceOrRateChecked }],
    ({ pageParam }) => getAllBeers<IPagination<IBeer[]>>({ page: pageParam, per_page, isPreferenceOrRateChecked }),
    {
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage > lastPage.totalPages ? undefined : nextPage;
      },
    }
  );
};

export const usePreferenceBeers = ({ isPreferenceOrRateChecked }: IRequestAllBeers) => {
  return useQuery([QUERY_KEY.BEERS, { isPreferenceOrRateChecked }, QUERY_KEY.COMMENTS], () =>
    getAllBeers<IBeer[]>({ isPreferenceOrRateChecked })
  );
};

export const useBeerComments = ({ beerId, per_page }: IRequestBeerComments) => {
  return useInfiniteQuery(
    [QUERY_KEY.BEERS, QUERY_KEY.COMMENTS, { beerId, per_page }],
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
  return useQuery([QUERY_KEY.BEERS, { id, beerId }], () => getBeer({ id, beerId }), {
    enabled: !!beerId,
  });
};

export const useRatesBeer = () => {
  return useQuery([QUERY_KEY.BEERS, QUERY_KEY.RATES], () => getRatesBeer());
};

export const useSearchBeer = ({ name }: IRequestSearchBeer) => {
  return useQuery([QUERY_KEY.BEERS, { name }], () => getSearchBeer({ name }));
};
