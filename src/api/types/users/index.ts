export interface IUser {
  id: number;
  nickname: string;
  email: string;
  isPreferenceOrRateChecked: boolean;
  created_at: string;
}

export interface IRequestLoginNaver {
  code: string;
  state: string;
  redirectUri: string;
}
