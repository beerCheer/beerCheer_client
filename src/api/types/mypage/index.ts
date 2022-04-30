export interface IComment {
  beerId: number;
  content: string;
  createdAt: string;
  beerName?: string;
}

export interface IComments {
  totalResults: number;
  result: IComment[];
}
