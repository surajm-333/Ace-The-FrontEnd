import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuid } from "uuid";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import {
  checkStrength,
  getColorFromStrength,
  generate,
} from "../../utils/passwords";
import authContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import accountsContext from "../../context/AccountsContext";

const NewAccountForm = ({ close }) => {
  const { mainPass } = useContext(authContext);
  const [visible, setVisible] = useState(false);
  const [strength, setStrength] = useState("Weak");
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const { refetch } = useContext(accountsContext);

  const onSubmit = async formData => {
    const id = uuid();
    const password = window.electronCrypto.encrypt(formData.password, mainPass);
    const email = window.electronCrypto.encrypt(formData.email, mainPass);
    try {
      const encryptedData = { ...formData, password, email, id };
      await window.db.addAccount(encryptedData);
      toast.success("Account added successfully");
      refetch();
      close();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const onGenerate = () => {
    setValue("password", generate({ length: 12 }));
  };

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      if (name === "password") {
        const strength = checkStrength(values.password);
        setStrength(strength);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} width="500px">
      <Stack spacing={2}>
        <Stack>
          <Typography variant="h6">Account Name</Typography>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            rules={{ required: "Account Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="e.g. Google"
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
              />
            )}
          />
          <Typography variant="caption" color="primary">
            * Accounts with same name will automatically be grouped
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6">Account Secondary Name</Typography>
          <Controller
            control={control}
            name="subName"
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} placeholder="e.g. Jack's account" />
            )}
          />
        </Stack>
        <Stack>
          <Typography variant="h6">Account Email/Username</Typography>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{ required: "Account Email/Username is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="e.g. jack123@gmail.com"
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message}
              />
            )}
          />
        </Stack>
        <Stack>
          <Typography variant="h6">Account Password</Typography>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{ required: "Account password is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
                type={visible ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setVisible(prev => !prev)}>
                      {visible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            )}
          />
          {
            <Typography
              variant="caption"
              sx={{ color: getColorFromStrength(strength) }}
            >
              {`Password strength: ${strength}`}
            </Typography>
          }
          <Typography
            variant="caption"
            sx={{
              color: "#2196f3",
              cursor: "pointer",
            }}
            onClick={onGenerate}
          >
            Generate ?
          </Typography>
        </Stack>
        <Button variant="contained" color="primary" type="submit">
          Add Account
        </Button>
      </Stack>
    </Box>
  );
};

export default NewAccountForm;
