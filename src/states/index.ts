import { atom } from 'recoil';

export const selectedBeersState = atom<string[]>({
  key: 'selectedBeersState',
  default: [],
});
