import React, { useState, useEffect, useContext } from "react";
import authContext from "../context/AuthContext";
import { toast } from "react-toastify";
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";

const AuthScreen = () => {
  const { login } = useContext(authContext);
  const navigate = useNavigate();
  const [masterPasswordExists, setMasterPasswordExists] = useState(false);
  const [mainPass, setMainPass] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = async () => {
    if (masterPasswordExists) {
      const authRes = await window.db.authenticate(mainPass);
      if (authRes) {
        login(mainPass);
        navigate("/dashboard/accounts");
      } else {
        toast.error("Invalid password. Please try again.");
      }
    } else {
      const pass = await window.db.createMasterPassword(mainPass);
      if (pass) {
        setMasterPasswordExists(true);
      } else {
        toast.error("Could not create master password. Please try again.");
      }
    }
  };

  useEffect(() => {
    window.db.checkMasterPassword().then(res => {
      setMasterPasswordExists(res);
    });
  }, []);

  return (
    <Stack
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Avatar
        src="/logo.jpg"
        alt="logo"
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
      <Typography variant="h6">
        {masterPasswordExists
          ? "Vault is locked. Enter your main password below."
          : "Welcome to your new Vault! Create your master password below."}
      </Typography>
      <Stack spacing={2} maxWidth="600px">
        <TextField
          label="Password"
          type={visible ? "text" : "password"}
          value={mainPass}
          onChange={e => setMainPass(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setVisible(!visible)}>
                {visible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={mainPass.trim() === ""}
          onClick={handleClick}
          fullWidth
        >
          {masterPasswordExists ? "Unlock" : "Create"}
        </Button>
        {!masterPasswordExists && (
          <Stack alignItems="center">
            <Typography variant="body2" color="textSecondary">
              You won't be able to access your vault if you forgets your master
              password.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              So remember it!
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default AuthScreen;
