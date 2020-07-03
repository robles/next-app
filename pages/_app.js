import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import fetcher from '../lib/fetcher';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseLine kickstart an elegant, consistent and simple baseline to build upon. */}
        <CssBaseLine />
        <SWRConfig
          value={{
            fetcher,
            onError(err) {
              console.error(err);
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
