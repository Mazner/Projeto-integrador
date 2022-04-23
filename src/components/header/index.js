import React from "react";
import { Logo } from "../../images";
import { NavigationButton } from "../../components"
import { AppBar, Box, Card, Button } from "@mui/material";

export function Header () {
  return (
    <AppBar sx={{ background:"#AA8989", height: "75px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
      <Card sx={{ width: "20%", background: "inherit"}} elevation={1}>
        <h1>"LOGO"</h1>
      </Card>

      <Box sx={{ mx:"auto", display: "flex", justifyContent: "center", marginRight:"20px" }}>
        <NavigationButton to="#" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Button color="success" variant="contained">"Anuncie seu serviço!"</Button>
          </Box>
        </NavigationButton>
      </Box>
    </AppBar>
  );
};