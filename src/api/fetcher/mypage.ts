import { API } from '..';
import { IComments } from '../types/mypage';

export const getUserComments = async () => {
  const { data } = await API.get<IComments>(`/users/mypage/comments`);

  return data;
};
