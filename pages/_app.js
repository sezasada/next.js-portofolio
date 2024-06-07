import { IntlProvider } from "react-intl";
import enMessages from "./translations/en.json";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="en" messages={enMessages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
