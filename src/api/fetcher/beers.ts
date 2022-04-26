import { API } from './../index';
import { IRequestAllBeers, IBeers } from './../types/beers/index';

export const getAllBeers = async ({ per_page, page, isPreferenceOrRateChecked }: IRequestAllBeers) => {
  const { data } = await API.get<IBeers[]>(`/beers`, {
    params: {
      page,
      per_page,
      isPreferenceOrRateChecked,
    },
  });

  return data;
};
