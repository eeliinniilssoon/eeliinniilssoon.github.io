import React from "react";
import Box from "@mui/material/Box";
import Moodyforest from "../../Images/Moodyforest.jpg";
import LandingpageopenImage from "../../Images/Landingpageopen.png";
import { Paper, Typography, Divider, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
  {
    img: LandingpageopenImage,
    title: "Hälsoappen - Ett UX UI projekt",
    link: "/Halsoappen",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "StädaFint AB - En företagshemsida",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Coolfashion - En klädaffär online",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Skvaller - En nyhetstidning online",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Tentamenbloggen - Din blogg på nätet",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "ToDo - En simpel att göra lista",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "auto",
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
        <Typography variant="h4" sx={{ color: "#fff", pb: "10px" }}>
          Mina projekt
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Grid container spacing={2}>
          {itemData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.img}>
              <ImageListItem sx={{ m: "10px" }}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  style={{ maxHeight: "400px", width: "100%" }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                      href={item.link}
                    >
                      <InfoIcon/>
                    </IconButton >
                  }
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Projects;
