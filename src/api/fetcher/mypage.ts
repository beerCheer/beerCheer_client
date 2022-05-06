import { API } from '..';
import { IFavoritesBeers, IComments } from '../types/mypage';

export const getUserFavoritesBeers = async () => {
  const { data } = await API.get<IFavoritesBeers>(`/users/mypage/favorites`);

  return data;
};

export const getUserComments = async () => {
  const { data } = await API.get<IComments>(`/users/mypage/comments`);

  return data;
};
