import { COMMENTS_PER_PAGE } from '../../constants';
import { API, IPagination } from './../index';
import {
  IRequestAllBeers,
  IBeer,
  IRequestBeerComments,
  IResponseBeerComments,
  IRequestBeer,
  IResponseBeer,
} from './../types/beers/index';

export const getAllBeers = async ({ per_page, page = 1, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  const { data } = await API.get<IBeer[]>(`/beers`, {
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
