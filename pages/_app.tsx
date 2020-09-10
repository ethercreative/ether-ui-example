import * as React from 'react';
import type { AppProps } from 'next/app';
import '../public/style.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
