import { API_END_POINT } from './../constants/index';
import axios from 'axios';

export const API = axios.create({ baseURL: API_END_POINT, withCredentials: true });

export interface IPagination<T> {
  page: number;
  totalResults: number;
  totalPages: number;
  result: T;
}
