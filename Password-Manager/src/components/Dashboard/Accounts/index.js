import React, { useContext } from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import NewButton from "../../Buttons/NewButton";
import AccountCarasoul from "../../AccountCarasoul";
import accountsContext from "../../../context/AccountsContext";

const Accounts = () => {
  const { accounts, loading } = useContext(accountsContext);

  return (
    <Box width="100%" height="100%">
      <NewButton />
      {loading && <Typography>Loading...</Typography>}
      {!loading && Object.keys(accounts).length === 0 ? (
        <Typography variant="h6" mt={2}>
          No accounts found
        </Typography>
      ) : (
        <Box
          mt={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(accounts).map(key => (
            <AccountCarasoul accounts={accounts[key]} key={key} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Accounts;
