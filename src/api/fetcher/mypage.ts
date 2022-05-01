import { API } from '..';
import { IFavoritesBeers } from '../types/mypage';

export const getUserFavoritesBeers = async () => {
  const { data } = await API.get<IFavoritesBeers>(`/users/mypage/favorites`);

  return data;
};
