import { IUser } from './../api/types/users/index';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginPopupState = atom({
  key: 'loginPopupState',
  default: false,
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userInfoState = atom<IUser | null>({
  key: 'userInfoState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
