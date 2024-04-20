import React from 'react';
import { Divider, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDarkMode } from "../../DarkModeContext";
import LandingpageopenImage from "../Images/vårdappen1.png";
import Skvaller1 from "../Images/Skvaller1.png";
import Tentamenbloggen1 from "../Images/Tentamenbloggen1.png";
import Todo1 from "../Images/Todo1.png";
import StädafintAB1 from "../Images/StädafintAB1.png";
import FriendlycornerJkpg from "../Images/FriendlyCornerJkpg.png";
import Vidici1 from "../Images/Vidici1.png";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Coolfashion1 from "../Images/CoolFashion1.png";
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: LandingpageopenImage,
    title: "Hälsoappen - Ett UX UI projekt",
    link: "/Halsoappen",
  },
  {
    img: StädafintAB1,
    title: "StädaFint AB - En företagshemsida",
    link: "/Stadafint",
  },
  {
    img: Coolfashion1,
    title: "Coolfashion - En klädaffär online",
    link: "/Coolfashion",
  },
  {
    img: Skvaller1,
    title: "Skvaller - En nyhetstidning online",
    link: "/Skvaller",
  },
  {
    img: Tentamenbloggen1,
    title: "Tentamenbloggen - Din blogg på nätet",
    link: "/Tentamenbloggen",
  },
  {
    img: Todo1,
    title: "ToDo - En simpel att göra lista",
    link: "/Todo",
  },
  {
    img: FriendlycornerJkpg,
    title: "Friendly Corner - Ett coworkingspace i Jönköping",
    link: "/Friendlycorner",
  },
  {
    img: Vidici1,
    title: "Vidici - En onlineaffär",
    link: "/Vidici",
  },
];

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [hoveredItem, setHoveredItem] = React.useState(null);

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: darkMode ? "#242424" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        paddingTop: "20vh",
      }}
    >
      <Typography variant="h4" sx={{ color: darkMode ? "#fff" : "#000", margin: "5vh" }}>
        Mina projekt
      </Typography>

      <Paper
        elevation={4}
        sx={{
          bgcolor: "#D9D9D9",
          width: "80%",
          minHeight: "60vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: darkMode ? "#2C2C2C" : "#D9D9D9",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Grid container spacing={2}>
        {itemData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.img}>
              <ImageListItem
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  m: "10px",
                  transition: "transform 0.3s",
                  transform: `scale(${hoveredItem === index ? 1.1 : 1})`,
                }}
              >
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
                      <InfoIcon></InfoIcon>
                    </IconButton>
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
