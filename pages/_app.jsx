// Globale Styles werden auf allen Seiten geladen
import '../sass/style.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
