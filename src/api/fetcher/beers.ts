import { COMMENTS_PER_PAGE, LIST_PER_PAGE } from '../../constants';
import { API, IPagination } from './../index';
import {
  IRequestAllBeers,
  IBeer,
  IRequestBeerComments,
  IRequestBeer,
  IResponseBeer,
  IRequestSearchBeer,
  IRequestCreateComment,
  IComment,
} from './../types/beers/index';

export const getAllBeers = async <T>({
  per_page = LIST_PER_PAGE,
  page = 1,
  isPreferenceOrRateChecked,
}: IRequestAllBeers) => {
  const { data } = await API.get<T>(`/beers`, {
    params: {
      page,
      per_page,
      isPreferenceOrRateChecked,
    },
  });

  return data;
};

export const getBeerComments = async ({ beerId, page = 1, per_page = COMMENTS_PER_PAGE }: IRequestBeerComments) => {
  const { data } = await API.get<IPagination<IComment[]>>(`/beers/${beerId}/comments`, {
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
  const { data } = await API.get<IBeer[]>(`/beers/search`, {
    params: {
      name,
    },
  });
  return data;
};

export const createComment = async ({ beerId, content }: IRequestCreateComment) => {
  await API.post(`/beers/${beerId}/comments`, { content });
};
