import { createContext } from "react";
interface IContextProps {
  user: any;
  setUser: any;
  isAdmin: any;
  setIsAdmin: any;
  isAuthenticated: any;
  setIsAuthenticated: any;
  cart: Array<any>;
  setCart: any;
}
const UserContext = createContext({} as IContextProps);
export default UserContext;
