import React from "react";
import { Outlet } from "react-router";

import { Box } from "@mui/material";
import SideNav from "../components/SideNav/SideNav";
import LogoutButton from "../components/Buttons/LogoutButton";
import { AccountsContext } from "../context/AccountsContext";

const Dashboard = () => {
  return (
    <Box height="100vh" width="100vw" display="flex">
      <SideNav />
      <LogoutButton />
      <Box flexGrow={1} height="100%" p={3}>
        <AccountsContext>
          <Outlet />
        </AccountsContext>
      </Box>
    </Box>
  );
};

export default Dashboard;
