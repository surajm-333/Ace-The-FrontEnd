import React, { useState, useEffect, createContext, useContext } from "react";
import authContext from "./AuthContext";

const accountsContext = createContext({
  accounts: [],
  loading: true,
  refetch: () => {},
});

export const AccountsContext = ({ children }) => {
  const { mainPass } = useContext(authContext);
  const [accounts, setAccounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.db.getAllAccounts().then(data => {
      const acc = data.map(account => ({
        ...account,
        password: window.electronCrypto.decrypt(account.password, mainPass),
        email: window.electronCrypto.decrypt(account.email, mainPass),
      }));
      setAccounts(groupByName(acc));
      setLoading(false);
    });
  }, [mainPass]);

  const groupByName = accounts => {
    return accounts.reduce((acc, account) => {
      if (!acc[account.name]) {
        acc[account.name] = [];
      }
      acc[account.name].push(account);
      return acc;
    }, {});
  };

  const refetch = () => {
    setLoading(true);
    window.db.getAllAccounts().then(data => {
      const acc = data.map(account => ({
        ...account,
        password: window.electronCrypto.decrypt(account.password, mainPass),
        email: window.electronCrypto.decrypt(account.email, mainPass),
      }));
      setAccounts(groupByName(acc));
      setLoading(false);
    });
  };
  return (
    <accountsContext.Provider value={{ accounts, loading, refetch }}>
      {children}
    </accountsContext.Provider>
  );
};

export default accountsContext;
