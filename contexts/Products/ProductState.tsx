import { useState } from "react";
import ProductContext from "./productContext";
const ProductState = (props) => {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProduct] = useState([]);
  const [searchValues, setSearchValue] = useState("");
  return (
    <ProductContext.Provider
      value={{
        products: products,
        setProducts: setProduct,
        filteredProducts: filteredProducts,
        setFilteredProducts: setFilteredProduct,
        searchValue: searchValues,
        setSearchValue: setSearchValue,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
