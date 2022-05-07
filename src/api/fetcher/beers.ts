import { COMMENTS_PER_PAGE, LIST_PER_PAGE } from '../../constants';
import { API, IPagination } from './../index';
import {
  IRequestAllBeers,
  IBeer,
  IRequestBeerComments,
  IRequestBeer,
  IResponseBeer,
  IRequestSearchBeer,
  ISearchBeer,
  IRequestCreateComment,
  IComment,
} from './../types/beers/index';

export const getAllBeers = async <T>({
  per_page = LIST_PER_PAGE,
  page = 1,
  isPreferenceOrRateChecked,
  id,
}: IRequestAllBeers) => {
  const { data } = await API.get<T>(`/beers`, {
    params: {
      page,
      per_page,
      isPreferenceOrRateChecked,
      id,
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

export const getSearchBeer = async ({ name, id }: IRequestSearchBeer) => {
  const { data } = await API.get<ISearchBeer>(`/beers/search`, {
    params: {
      name,
      id,
    },
  });
  return data;
};

export const createComment = async ({ beerId, content }: IRequestCreateComment) => {
  await API.post(`/beers/${beerId}/comments`, { content });
};

export const likeBeer = async (beerId: number) => {
  await API.post(`/favorites`, { beerId });
};

export const getRecommendBeer = async () => {
  const { data } = await API.get<IBeer[]>('/recommendations');

  return data;
};

export const cancelLike = async (beerId: number) => {
  await API.delete(`/favorites/${beerId}`);
};
