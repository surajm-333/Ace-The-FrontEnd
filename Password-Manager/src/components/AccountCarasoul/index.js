import React, { useState } from "react";
import { Card, IconButton, Box, Typography } from "@mui/material";
import AccountCard from "../AccountCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const AccountCarasoul = props => {
  const { accounts } = props;
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent(current + 1);
  const handlePrev = () => setCurrent(current - 1);

  if (!accounts[current]) {
    if (current === 0) setCurrent(current + 1);
    else setCurrent(current - 1);
  }

  return (
    <Card
      elevation={5}
      sx={{ width: "400px", m: 1, position: "relative", px: 3 }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 1,
          transform: "translateY(-50%)",
        }}
      >
        <IconButton onClick={handlePrev} disabled={current === 0}>
          <ArrowBack />
        </IconButton>
      </Box>
      {accounts[current] && (
        <AccountCard account={accounts[current]} index={current} />
      )}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 2,
          transform: "translateY(-50%)",
        }}
      >
        <IconButton
          onClick={handleNext}
          disabled={current === accounts.length - 1}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
        {current + 1}/{accounts.length}
      </Typography>
    </Card>
  );
};

export default AccountCarasoul;
