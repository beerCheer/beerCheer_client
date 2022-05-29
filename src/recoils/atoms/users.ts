import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginPopupState = atom({
  key: 'loginPopupState',
  default: false,
});

export const userIdState = atom<number | undefined>({
  key: 'userIdState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
