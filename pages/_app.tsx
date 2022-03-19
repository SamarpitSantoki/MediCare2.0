import ProductState from "../contexts/Products/ProductState";
import "../styles/globals.css";
import UserState from "../contexts/User/UserState";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <ProductState>
        <Component {...pageProps} />
      </ProductState>
    </UserState>
  );
}

export default MyApp;
