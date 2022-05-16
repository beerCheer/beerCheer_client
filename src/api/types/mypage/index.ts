export interface IComment {
  beerId: number;
  content: string;
  createdAt: string;
  beerName?: string;
}
export interface IMyData<T> {
  totalResults: number;
  result: T;
  message?: string;
}
