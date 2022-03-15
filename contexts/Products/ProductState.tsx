import { useState } from "react";
import ProductContext from "./productContext";
const ProductState = (props) => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <ProductContext.Provider
      value={{
        products: product,
        setProducts: setProduct,
        filteredProducts: filteredProduct,
        setFilteredProducts: setFilteredProduct,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
