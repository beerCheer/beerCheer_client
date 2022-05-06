export interface IFavoritesBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  avg?: number;
}

export interface IFavoritesBeers {
  totalResults: number;
  result: IFavoritesBeer[];
  message?: string;
}

export interface IComment {
  beerId: number;
  content: string;
  createdAt: string;
  beerName?: string;
}

export interface IComments {
  totalResults: number;
  result: IComment[];
  message?: string;
}
