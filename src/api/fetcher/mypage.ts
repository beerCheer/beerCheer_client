import { IBeer } from './../types/beers/index';
import { API } from '..';
import { IComment, IMyData } from '../types/mypage';

export const getUserFavoritesBeers = async () => {
  const { data } = await API.get<IMyData<IBeer[]>>(`/users/mypage/favorites`);

  return data;
};

export const getUserComments = async () => {
  const { data } = await API.get<IMyData<IComment[]>>(`/users/mypage/comments`);

  return data;
};

export const getUserRates = async () => {
  const { data } = await API.get<IMyData<IBeer[]>>(`/users/mypage/beers`);

  return data;
};
