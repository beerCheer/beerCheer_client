import { UseQueryOptions } from 'react-query';

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
  options?: UseQueryOptions<IUserList, any, IUserList, any>;
}

export interface ICommnet {
  id: number;
  content: string;
  createdAt: string;
  User: {
    nickname: string;
  };
}

export interface ICommnetList {
  count: number;
  rows: ICommnet[];
}
export interface IRequestCommentList {
  page?: number;
  per_page?: number;
  options?: UseQueryOptions<ICommnetList, any, ICommnetList, any>;
}
