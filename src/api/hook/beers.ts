import { IRequestAllBeers, IRequestBeerComments } from './../types/beers/index';
import { getAllBeers, getBeerComments } from './../fetcher/beers';
import { useQuery } from 'react-query';

const QUERY_KEY = {
  BEERS: 'BEERS',
  COMMENTS: 'COMMENTS',
};

export const useAllBeers = ({ page, per_page, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  return useQuery([QUERY_KEY.BEERS, page, per_page, isPreferenceOrRateChecked], () =>
    getAllBeers({ page, per_page, isPreferenceOrRateChecked })
  );
};

export const useBeerComments = ({ page, per_page, beerId }: IRequestBeerComments) => {
  return useQuery(
    [QUERY_KEY.BEERS, QUERY_KEY.COMMENTS, page, per_page, beerId],
    () => getBeerComments({ page, per_page, beerId }),
    { enabled: !!beerId }
  );
};
