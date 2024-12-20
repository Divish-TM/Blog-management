import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AddCircleOutline as AddIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: "'Poppins', sans-serif" }}
        >
          Blog Manager
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => navigate("/create")}
          sx={{ fontSize: "18px" }}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
