import { IPagination } from './../index';
import {
  IBeer,
  IRequestAllBeers,
  IRequestBeer,
  IRequestBeerComments,
  IRequestSearchBeer,
} from './../types/beers/index';
import {
  getAllBeers,
  getBeer,
  getBeerComments,
  getRatesBeer,
  getSearchBeer,
  getRecommendBeer,
} from './../fetcher/beers';
import { useQuery, useInfiniteQuery } from 'react-query';
import { USER_QUERY_KEY } from './users';

export const BEER_QUERY_KEY = {
  BEERS: 'BEERS',
  COMMENTS: 'COMMENTS',
  RATES: 'RATES',
  PREFERENCE: 'PREFERENCE',
  RECOMMNEDATIONS: 'RECOMMNEDATIONS',
};

export const useAllBeers = ({ per_page, isPreferenceOrRateChecked, id }: IRequestAllBeers) => {
  return useInfiniteQuery(
    [BEER_QUERY_KEY.BEERS, { per_page, isPreferenceOrRateChecked }, USER_QUERY_KEY.USERS],
    ({ pageParam }) => getAllBeers<IPagination<IBeer[]>>({ page: pageParam, per_page, isPreferenceOrRateChecked, id }),
    {
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage > lastPage.totalPages ? undefined : nextPage;
      },
    }
  );
};

export const usePreferenceBeers = ({ isPreferenceOrRateChecked }: IRequestAllBeers) => {
  return useQuery([BEER_QUERY_KEY.BEERS, { isPreferenceOrRateChecked }, BEER_QUERY_KEY.COMMENTS], () =>
    getAllBeers<IBeer[]>({ isPreferenceOrRateChecked })
  );
};

export const useBeerComments = ({ beerId, per_page }: IRequestBeerComments) => {
  return useInfiniteQuery(
    [BEER_QUERY_KEY.BEERS, BEER_QUERY_KEY.COMMENTS, { beerId, per_page }],
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
  return useQuery([BEER_QUERY_KEY.BEERS, { beerId }, USER_QUERY_KEY.USERS], () => getBeer({ id, beerId }), {
    enabled: !!beerId,
  });
};

export const useRatesBeer = (id?: number) => {
  return useQuery([BEER_QUERY_KEY.BEERS, BEER_QUERY_KEY.RATES, { id }], () => getRatesBeer(id));
};

export const useSearchBeer = ({ name, id }: IRequestSearchBeer) => {
  return useQuery([BEER_QUERY_KEY.BEERS, { name }, USER_QUERY_KEY.USERS], () => getSearchBeer({ name, id }));
};

export const useRecommendationsQuery = (options = {}) => {
  return useQuery([BEER_QUERY_KEY.BEERS, BEER_QUERY_KEY.RECOMMNEDATIONS], () => getRecommendBeer(), options);
};
