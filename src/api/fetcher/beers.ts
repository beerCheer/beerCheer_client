import { API } from './../index';
import { IRequestAllBeers, IBeers, IRequestBeerComments, IResponseBeerComments } from './../types/beers/index';

export const getAllBeers = async ({ per_page, page = 1, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  const { data } = await API.get<IBeers[]>(`/beers`, {
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
