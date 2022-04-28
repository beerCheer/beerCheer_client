import { API } from './../index';
import {
  IRequestAllBeers,
  IBeer,
  IRequestBeerComments,
  IResponseBeerComments,
  IRequestBeer,
  IRequestSearchBeer,
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

export const getBeerComments = async ({ beerId, page, per_page }: IRequestBeerComments) => {
  const { data } = await API.get<IResponseBeerComments>(`/beers/${beerId}/comments`, {
    params: {
      page,
      per_page,
    },
  });
  return data;
};

export const getBeer = async ({ id, beerId }: IRequestBeer) => {
  const { data } = await API.get<IBeer>(`/beers/${beerId}`, {
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
  const { data } = await API.get<IBeer[]>(`/beers/search`, {
    params: {
      name,
    },
  });
  return data;
};
