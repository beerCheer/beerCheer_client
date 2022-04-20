import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import reset from '../styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
