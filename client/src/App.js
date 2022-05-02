import React from "react";

import { container, AppBar, Typegraphy, Grow, Grid } from "@material-ui/core";
export default function App() {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typegraphy varient="h2" align="center">
          TravelMemories
        </Typegraphy>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
    </Container>
  );
}
