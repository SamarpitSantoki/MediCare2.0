import { useState } from "react";
import UserContext from "./userContext";
const UserState = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isAdmin,
        setIsAdmin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
