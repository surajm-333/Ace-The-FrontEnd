import React, { useState } from "react";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  Stack,
  Switch,
  Button,
  TextField,
} from "@mui/material";
import { generate } from "../../../utils/passwords";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "30px",
    width: "50px",
  },
});

const Generator = () => {
  const [genPassword, setGenPassword] = useState("");
  const [options, setOptions] = useState({ length: 8 });

  const onGenPassword = () => {
    if (isNaN(options.length)) {
      toast.error("Please enter a number", {
        pauseOnHover: false,
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (options.length > 20 || options.length < 6) {
      toast.error("Please keep length between 6 and 20", {
        pauseOnHover: false,
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const pass = generate(options);
    setGenPassword(pass);
    if (!pass) {
      toast.error("Please select at least one option", {
        pauseOnHover: false,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleChange = e => {
    const { name, value, checked } = e.target;

    setOptions({
      ...options,
      [name]: name === "length" ? +value : checked,
    });
  };

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">
          {genPassword ? genPassword : "Password Generator"}
        </Typography>
        <Button variant="contained" color="primary" onClick={onGenPassword}>
          Generate
        </Button>
        <Stack spacing={2} alignItems="start">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">Length (6-20)</Typography>
            <StyledTextField
              name="length"
              onChange={handleChange}
              defaultValue="8"
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">Uppercase Letters (A-Z)</Typography>
            <Switch defaultChecked name="uppercase" onChange={handleChange} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">Lowercase Letters (a-z)</Typography>
            <Switch defaultChecked name="lowercase" onChange={handleChange} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">Numbers (0-9)</Typography>
            <Switch defaultChecked name="numbers" onChange={handleChange} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">
              Special Characters (!@#$%^&*()_+-=)
            </Typography>
            <Switch defaultChecked name="symbols" onChange={handleChange} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Generator;
