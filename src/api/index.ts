import { API_END_POINT } from './../constants/index';
import axios from 'axios';
const local = 'http://localhost:3001';

export const API = axios.create({ baseURL: local });

export interface IPagination<T> {
  page: number;
  totalResults: number;
  totalPages: number;
  result: T;
}
