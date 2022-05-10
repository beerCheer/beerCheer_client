// export const API_END_POINT = 'https://server.beerbewar.com';
export const API_END_POINT = 'http://ec2-52-79-227-125.ap-northeast-2.compute.amazonaws.com:8080';

export const LIST_PER_PAGE = 20;
export const COMMENTS_PER_PAGE = 20;

export const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
export const NAVER_REDIRECT_URL = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL;
export const KAKAO_REST_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_KEY;
export const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

export const SITE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://beerbewar.vercel.app';
