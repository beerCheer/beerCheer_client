import { IUser } from '../types/users/index';
import { API } from '..';
import { IRequestLoginNaver } from '../types/users';

export const loginNaver = async (requestDataLoginNaver: IRequestLoginNaver) => {
  const { data } = await API.post<IUser>(`/naver`, requestDataLoginNaver);

  return data;
};

export const getUserInfo = async (id: number) => {
  const { data } = await API.get<IUser>(`/users/${id}`);

  return data;
};

export const logout = async () => {
  await API.post('/users/logout');
};
