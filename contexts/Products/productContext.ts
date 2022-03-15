import { createContext } from "react";
interface IContextProps {
  products: any;
  setProducts: any;
  filteredProducts: any;
  setFilteredProducts: any;
  searchValue: any;
  setSearchValue: any;
}
const ProductContext = createContext({} as IContextProps);

export default ProductContext;
