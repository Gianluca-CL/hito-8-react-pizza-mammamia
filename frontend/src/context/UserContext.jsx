
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
