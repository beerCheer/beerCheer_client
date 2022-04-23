import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import global from '../styles/global';
import theme from '../styles/theme';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} /> {getLayout(<Component {...pageProps} />)}{' '}
    </ThemeProvider>
  );
}
