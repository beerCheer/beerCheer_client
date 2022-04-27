import { atom } from 'recoil';
export interface DummyProps {
  id: number;
  name: string;
  score: number;
  imageUrl: string;
}

export const selectedBeersState = atom<string[]>({
  key: 'selectedBeersState',
  default: [],
});

export const isLoadingState = atom<boolean>({
  key: 'isLoadingState',
  default: false,
});

export const recommendBeerState = atom<DummyProps[]>({
  key: 'recommendBeerState',
  default: [],
});
