import ProductState from "../contexts/Products/ProductState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductState>
      <Component {...pageProps} />
    </ProductState>
  );
}

export default MyApp;
