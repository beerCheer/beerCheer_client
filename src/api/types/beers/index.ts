import { IUser } from '../users';

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  'User.nickname': string;
}

export interface IRequestBeerComments {
  beerId: number;
  page?: number;
  per_page?: number;
}

export interface IResponseBeerComments {
  count: number;
  rows: IComment[];
}

export interface IRequestAllBeers {
  page?: number;
  per_page?: number;
  isPreferenceOrRateChecked: boolean;
}

export interface IBeer {
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
  volume: { value: number; unit: string };
  boil_volume: { value: number; unit: string };
  method: {
    mash_temp: {
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  food_pairing: string[] | string;
  brewers_tips: string;
  contributed_by: string;
  avg: number;
  isLiked: boolean;
}

export interface IRequestBeer {
  id?: number;
  beerId: number;
}

export interface IResponseBeer {
  beer: IBeer;
  rate: string;
}

export interface IRequestSearchBeer {
  id?: number;
  name: string;
}

export interface ISearchBeer {
  totalResults: number;
  result: IBeer[];
}
