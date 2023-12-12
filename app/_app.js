// _app.js (or _app.tsx if you are using TypeScript)
import { useEffect } from 'react';
import authVerification from './utils/authVerification'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    authVerification();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
