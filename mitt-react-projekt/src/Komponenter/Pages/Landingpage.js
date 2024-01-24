import React from "react";
import { Paper, Box } from "@mui/material";
import Moodyforest from "../../Images/Moodyforest.jpg";

const Landingpage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "80%",
          minHeight: "60vh",
          margin: "10vh auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Hej! Mitt namn är Elin. Välkommen till min sida!
      </Paper>
    </Box>
  );
};

export default Landingpage;
