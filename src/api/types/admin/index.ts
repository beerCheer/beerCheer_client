export interface IUser {
  id: number;
  nickname: string;
  createdAt: string;
}

export interface IUserList {
  count: number;
  rows: IUser[];
}

export interface IRequestUserList {
  page?: number;
  per_page?: number;
}
