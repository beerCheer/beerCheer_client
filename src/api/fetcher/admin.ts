import { API } from '..';
import { IUserList, IRequestUserList } from '../types/admin';

export const getUserList = async ({ page, per_page }: IRequestUserList) => {
  const { data } = await API.get<IUserList>(`admin/users`, {
    params: {
      page,
      per_page,
    },
  });

  return data;
};

export const deleteUser = async (id?: number) => {
  await API.delete(`/users?id=${id}`);
};
