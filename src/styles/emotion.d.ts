import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mq: {
      desktop: string;
      laptop: string;
      tablet: string;
    };
    'font-3xl': string;
    'font-2xl': string;
    'font-xl': string;
    'font-lg': string;
    'font-md': string;
    'font-sm': string;
    'font-xs': string;
    'font-light': number;
    'font-regular': number;
    'font-medium': number;
    'font-semibold': number;
    'font-bold': number;
  }
}
