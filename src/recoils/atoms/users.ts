import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginPopupState = atom({
  key: 'loginPopupState',
  default: false,
});

export const userIdState = atom<number | null>({
  key: 'userIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userNicknameState = atom<string>({
  key: 'userNicknameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
