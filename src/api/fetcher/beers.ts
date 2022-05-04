import { COMMENTS_PER_PAGE, LIST_PER_PAGE } from '../../constants';
import { API, IPagination } from './../index';
import {
  IRequestAllBeers,
  IBeer,
  IRequestBeerComments,
  IResponseBeerComments,
  IRequestBeer,
  IResponseBeer,
  IRequestSearchBeer,
  ISearchBeer,
} from './../types/beers/index';

export const getAllBeers = async ({
  per_page = LIST_PER_PAGE,
  page = 1,
  isPreferenceOrRateChecked,
}: IRequestAllBeers) => {
  const { data } = await API.get<IPagination<IBeer[]>>(`/beers`, {
    params: {
      page,
      per_page,
      isPreferenceOrRateChecked,
    },
  });

  return data;
};

export const getBeerComments = async ({ beerId, page = 1, per_page = COMMENTS_PER_PAGE }: IRequestBeerComments) => {
  const { data } = await API.get<IPagination<IResponseBeerComments>>(`/beers/${beerId}/comments`, {
    params: {
      page,
      per_page,
    },
  });
  return data;
};

export const getBeer = async ({ id, beerId }: IRequestBeer) => {
  const { data } = await API.get<IResponseBeer>(`/beers/${beerId}`, {
    params: {
      id,
    },
  });
  return data;
};

export const getRatesBeer = async () => {
  const { data } = await API.get<IBeer[]>(`/beers/rates`);
  return data;
};

export const getSearchBeer = async ({ name }: IRequestSearchBeer) => {
  const { data } = await API.get<ISearchBeer>(`/beers/search`, {
    params: {
      name,
    },
  });
  return data;
};
