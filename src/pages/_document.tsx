import { Html, Head, Main, NextScript } from 'next/document';

const SITE_NAME = '비어비워';
const SITE_TITLE = '비어비워';
const SITE_DESCRIPTION = '내가 좋아하는 맥주를 기반으로 맥주 추천받기!';
const SITE_IMAGE = '/logo.png';
const SITE_URL = 'https://beer-bewar-staging.vercel.app';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href={SITE_IMAGE} />
        <link rel="canonical" href={SITE_URL} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={SITE_IMAGE} />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="/manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
