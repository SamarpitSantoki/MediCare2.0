import { useEffect, useState } from "react";
import UserContext from "./userContext";
const UserState = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    const localCart = JSON.parse(sessionStorage.getItem("cart"));
    if (localUser?.email) {
      setUser(localUser);
      setIsAuthenticated(true);
      setIsAdmin(localUser?.isAdmin);
      setCart(localCart);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isAdmin,
        setIsAdmin,
        cart,
        setCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
