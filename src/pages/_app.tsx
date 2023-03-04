import '../styles/shared/FontAwesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;