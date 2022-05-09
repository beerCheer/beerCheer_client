import { API } from '..';
import { IFavoritesBeers, IComments, IRates } from '../types/mypage';

export const getUserFavoritesBeers = async () => {
  const { data } = await API.get<IFavoritesBeers>(`/users/mypage/favorites`);

  return data;
};

export const getUserComments = async () => {
  const { data } = await API.get<IComments>(`/users/mypage/comments`);

  return data;
};

export const getUserRates = async () => {
  const { data } = await API.get<IRates>(`/users/mypage/beers`);

  return data;
};
