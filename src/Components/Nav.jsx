import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import  Stack  from "@mui/system/Stack";
import  Typography  from "@mui/material/Typography";
const Nav = () => {
  return (
    <div>
      {/* <Box className="box"
      sx={{
        width:'100%',
        height: 60,
        backgroundColor: '#9F8C76',
        position:'relative'
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}

    /> */}
      <AppBar position="relative" style={{ background: "#9F8C76" }}>
        <Toolbar>
          <AcUnitIcon
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ mr: 2 }}
          ></AcUnitIcon>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Materail UI
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Nav };
