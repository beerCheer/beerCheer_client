import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import global from '../styles/global';
import theme from '../styles/theme';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={global} /> {getLayout(<Component {...pageProps} />)}{' '}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
