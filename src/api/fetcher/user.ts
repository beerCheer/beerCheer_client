import { IUser } from './../types/users/index';
import { API } from '..';
import { IRequestLoginNaver } from '../types/users';

export const loginNaver = async (requestDataLoginNaver: IRequestLoginNaver) => {
  const { data } = await API.post<IUser>(`/naver`, requestDataLoginNaver);

  return data;
};

export const getUserInfo = async () => {
  const { data } = await API.get('/user');
  return data;
};
