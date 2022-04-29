import { selector } from 'recoil';
import { userIdState } from '../atoms/users';

export const loginState = selector({
  key: 'loginState',
  get: ({ get }) => {
    const userId = get(userIdState);

    return !!userId;
  },
});
