import { IRequestAllBeers } from './../types/beers/index';
import { getAllBeers } from './../fetcher/beers';
import { useQuery } from 'react-query';

const QUERY_KEY = {
  BEERS: 'BEERS',
};

export const useAllBeers = ({ page, per_page, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  return useQuery([QUERY_KEY.BEERS, page, per_page, isPreferenceOrRateChecked], () =>
    getAllBeers({ page, per_page, isPreferenceOrRateChecked })
  );
};
