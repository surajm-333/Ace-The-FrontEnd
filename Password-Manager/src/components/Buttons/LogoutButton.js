import React from "react";
import { useNavigate } from "react-router";

import { Box, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";

const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <Box position="fixed" right={0} top={0} m={2}>
      <IconButton onClick={() => navigate("/")}>
        <Logout />
      </IconButton>
    </Box>
  );
};

export default LogoutButton;
