import { API } from '..';
import { IRequestLoginNaver } from '../types/users';

export const loginNaver = async (requestDataLoginNaver: IRequestLoginNaver) => {
  const { data } = await API.post(`/naver`, requestDataLoginNaver);

  return data;
};
