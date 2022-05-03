import { API } from '..';
import { IUserList, IRequestUserList, IRequestCommentList, ICommnetList } from '../types/admin';

export const getUserList = async ({ page, per_page }: IRequestUserList) => {
  const { data } = await API.get<IUserList>(`admin/users?page=${page}&per_page=${per_page}`);

  return data;
};

export const deleteUser = async (id?: number) => {
  await API.delete(`/users?id=${id}`);
};

export const getCommentList = async ({ page, per_page }: IRequestCommentList) => {
  const { data } = await API.get<ICommnetList>(`admin/comments?page=${page}&per_page=${per_page}`);

  return data;
};

export const deleteComment = async (id?: number) => {
  await API.delete(`/beers/comments/${id}`);
};
