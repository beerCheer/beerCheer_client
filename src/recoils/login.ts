import { atom } from 'recoil';

export const loginPopupState = atom({
  key: 'loginPopupState',
  default: false,
});

export const loginState = atom({
  key: 'loginState',
  default: false,
});
