import { selector } from 'recoil';
import { getUserInfo } from '../../api/fetcher/users';
import { userIdState } from '../atoms/users';

export const isValidAdminSelector = selector({
  key: 'isValidAdminSelector',
  get: async ({ get }) => {
    const userId = get(userIdState);

    if (!userId) return false;

    try {
      const { isAdmin } = await getUserInfo(userId as number);
      return !!isAdmin;
    } catch (err) {
      throw err;
    }
  },
});
