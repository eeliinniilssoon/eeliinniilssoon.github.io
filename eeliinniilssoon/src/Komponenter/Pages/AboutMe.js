import React from 'react';
import { useDarkMode } from "../../DarkModeContext";
import Box from "@mui/material/Box";
import ProfilePic from "../Images/ProfilePic.png";
import {
  Paper,
  Typography,
  ListItem,
  ListItemText,
  Grid,
  Divider,
} from "@mui/material";

const AboutMe = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();

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
  <Typography variant="h4" sx={{ color: darkMode ? "#fff" : "#000", margin: "5vh" }}
      >
        Om Mig
      </Typography>

      <Paper
        elevation={4}
        sx={{
          width: "80%",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          bgcolor: darkMode ? "#2C2C2C" : "#D9D9D9",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ bgcolor: "#D3ABAB" }}>
            <ListItem>
              <h3 style={{ fontSize: "22px", fontWeight: "lighter" }}>
                E L I N
              </h3>
            </ListItem>
            <ListItem>
              <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>
                N I L S S O N
              </h3>
            </ListItem>
            <ListItem
              sx={{
                backgroundImage: `url(${ProfilePic})`,
                backgroundSize: "250px",
                height: "250px",
                width: "250px",
                borderRadius: "250px",
              }}
            ></ListItem>
            <ListItem sx={{ fontSize: "22px", marginTop: "20px" }}>
              P E R S O N L I G T
            </ListItem>
            <ListItem>
              <ListItemText secondary="Blåsippevägen 2, 571 65 Grimstorp" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10 Januari 1997" />
            </ListItem>
            <ListItem sx={{ fontSize: "22px", marginTop: "20px" }}>
              K O N T A K T
            </ListItem>
            <ListItem>
              <ListItemText secondary="073-075 37 90" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="elin.nilsson.97@hotmail.com" />
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={
                  <a
                    href="https://www.linkedin.com/in/elin-nilsson-379951157/"
                    style={{ color: "#6C5155" }}
                  >
                    LinkedIn
                  </a>
                }
              />
            </ListItem>
            <ListItem sx={{ fontSize: "22px", marginTop: "20px" }}>
              K O M P E T E N S E R
            </ListItem>
            <ListItem>
              <ListItemText secondary="Html och CSS" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="JavaScript och TypeScript" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Angular och React" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="UX / UI" />
            </ListItem>

            <ListItem sx={{ fontSize: "22px", marginTop: "20px" }}>
              S P R Å K
            </ListItem>
            <ListItem>
              <ListItemText secondary="Svenska - Modersmål" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Engelska - Flytande" />
            </ListItem>

            <ListItem sx={{ fontSize: "22px", marginTop: "20px" }}>
              Ö V R I G T
            </ListItem>
            <ListItem>
              <ListItemText secondary="B-körkort" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Truckkort A2, A4, B1" />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: darkMode ? "#fff" : "#000" }}>
              Arbetslivserfarenhet
            </Typography>

            <Divider
              sx={{
                width: "100%",
                bgcolor: darkMode ? "#fff" : "#333",
                margin: "20px 0",
              }}
            />

            <ListItem>
              <ListItemText
                primary="Biografansvarig – Eurostar AB, Nässjö"
                secondary="2018 - nu"
              />
            </ListItem>
            <ul style={{ color: "#777777", marginLeft: "50px" }}>
              <li>
                Huvudansvarig för kommunikationen mellan <br></br> huvudkontoret
                och Biografen i Nässjö
              </li>
              <li>Ansvarig för personalupplärning</li>
              <li>Schemaläggare</li>
              <li>Huvudansvar för inköp och kontakten med leverantörerna</li>
              <li>Ansvarig för sociala medier</li>
              <li>Filmmaskinist</li>
              <li>Kundservice</li>
            </ul>
            <ListItem>
              <ListItemText
                primary="(Praktik) Frontendutvecklare
                "
                secondary="November 2023 - Februari 2024"
              />
            </ListItem>
            <ul style={{ color: "#777777", marginLeft: "50px" }}>
              <li>Webbutveckling</li>
              <li>Kundbemötande</li>
            </ul>

            <ListItem>
              <ListItemText
                primary="Butikssäljare – Jem & Fix, Nässjö"
                secondary="2012 – 2018"
              />
            </ListItem>
            <ul style={{ color: "#777777", marginLeft: "50px" }}>
              <li>Kassahantering</li>
              <li>Varuplock och beställning av varor</li>
              <li>Hantering av kampanjmaterial</li>
              <li>Kundservice</li>
              <li>Inventering</li>
            </ul>

            <ListItem>
              <ListItemText
                primary="Nagelterapeut – Mias Hårstudio, Nässjö"
                secondary="2015 – 2016"
              />
            </ListItem>
            <ul style={{ color: "#777777", marginLeft: "50px" }}>
              <li>Utfört behandlingar inom nagelvård</li>
              <li>Beställning av varor och material</li>
            </ul>

            <ListItem>
              <ListItemText
                primary="Spaterapeut – Vätterspa, Jönköping"
                secondary="2012 – 2018"
              />
            </ListItem>
            <ul style={{ color: "#777777", marginLeft: "50px" }}>
              <li>Bokade in kunder via telefon</li>
              <li>Utförde behandlingar</li>
              <li>Kassahantering</li>
              <li>Försäljning</li>
            </ul>

            <Typography
              variant="h4"
              sx={{ color: darkMode ? "#fff" : "#000", marginTop: "40px" }}
            >
              Utbildningar
            </Typography>

            <Divider
              sx={{
                width: "100%",
                bgcolor: darkMode ? "#fff" : "#333",
                margin: "20px 0",
              }}
            />
            <ListItem>
              <ListItemText
                primary="Frontendutvecklare – EC Utbildning"
                secondary="2022 – nu"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Stylist - Brinellgymnasiet Nässjö"
                secondary="2013 - 2016"
              />
            </ListItem>

            <Typography
              variant="h4"
              sx={{ color: darkMode ? "#fff" : "#000", marginTop: "40px" }}
            >
              Kurser
            </Typography>

            <Divider
              sx={{
                width: "100%",
                bgcolor: darkMode ? "#fff" : "#333",
                margin: "20px 0",
              }}
            />

            <ListItem>
              <ListItemText
                primary="Starta eget kurs – NNAB"
                secondary="2018"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Förtroendemannautbildning – Fackförbundet Handels"
                secondary="2016 – 2017"
              />
            </ListItem>

          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutMe;
