export interface IUser {
  email: string;
  id: number;
  isAdmin: number;
  isPreferenceOrRateChecked: boolean;
  nickname: string;
}

export interface IRequestLogin {
  code: string;
  state?: string;
  redirectUri: string;
}
