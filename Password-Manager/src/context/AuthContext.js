import { createContext, useState } from "react";

const authContext = createContext({
  isAuthenticated: false,
  mainPass: "",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mainPass, setMainPass] = useState("");

  const login = password => {
    setIsAuthenticated(true);
    setMainPass(password);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setMainPass("");
  };

  return (
    <authContext.Provider value={{ isAuthenticated, mainPass, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
