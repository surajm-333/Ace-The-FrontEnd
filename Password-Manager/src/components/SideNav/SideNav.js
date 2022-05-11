import React from "react";
import { useLocation, useNavigate } from "react-router";

import {
  Box,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from "@mui/material";
import { Key, Password } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

const SideNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box height="100vh" bgcolor="grey">
      <List>
        <ListItemButton
          onClick={() => navigate("accounts")}
          selected={pathname.includes("accounts")}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: red[700] }}>
              <Key />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Accounts" secondary="All accounts" />
        </ListItemButton>
        <ListItemButton
          onClick={() => navigate("generator")}
          selected={pathname.includes("generator")}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: green[700] }}>
              <Password />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Generator" secondary="Generate passwords" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideNav;
