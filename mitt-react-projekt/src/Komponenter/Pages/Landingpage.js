import React from "react";
import { Box, Typography } from "@mui/material";
import Moodyforest from "../../Images/Moodyforest.jpg";
import "../CSS/Landingpage.css";
import "../../index.css"


const Landingpage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "50vh",
          height: "50vh",
          margin: "10vh auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0,
          animation: "fadeIn 2s forwards",
          borderRadius: "50%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            left: "0",
            top: "35%",
            transform: "translateY(-50%)",
            animation: "swishLeft 1s forwards",
          }}
        >
          Elin
        </Typography>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            right: "0",
            top: "48%",
            transform: "translateY(-50%)",
            animation: "swishRight 1s forwards",
          }}
        >
          Nilsson
        </Typography>
      </Box>
    </Box>
  );
};

export default Landingpage;
