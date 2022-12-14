import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const NavBar = ({ totalCounters }) => {
  return (
    <Box sx={{ flexGrow: 1, ml: 5, mr: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavBar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
