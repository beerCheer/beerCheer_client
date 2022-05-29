import { IUser } from '../types/users/index';
import { API } from '..';
import { IRequestLogin } from '../types/users';

export const loginNaver = async (requestDataLoginNaver: IRequestLogin) => {
  const { data } = await API.post<IUser>(`/naver`, requestDataLoginNaver);

  return data;
};

export const getUserInfo = async (id: number) => {
  const { data } = await API.get<IUser>(`/users/${id}`);

  return data;
};

export const loginKakao = async (requestDataLoginKakao: IRequestLogin) => {
  const { data } = await API.post<IUser>(`/kakao`, requestDataLoginKakao);

  return data;
};

export const logout = async () => {
  await API.post('/users/logout');
};

export const updateIsPreferenceOrRate = async () => {
  await API.patch('/users');
};

export const nicknameCheck = async (nickname: string) => {
  const { data } = await API.post('/users/userInfo', { nickname });

  return data;
};

export const patchUserInfo = async (nickname: string) => {
  await API.patch('/users/userInfo', { nickname });
};

export const withdraw = async () => {
  await API.delete('/users');
};
