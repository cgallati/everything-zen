import '../public/fonts/global.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (window) smoothscroll.polyfill();
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
