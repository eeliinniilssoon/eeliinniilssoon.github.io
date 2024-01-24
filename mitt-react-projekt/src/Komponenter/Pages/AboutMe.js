import React from "react";
import Box from "@mui/material/Box";
import Moodyforest from "../../Images/Moodyforest.jpg";
import {
  Paper,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

const AboutMe = () => {
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
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Kontaktinformation
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText>Namn: Elin Nilsson</ListItemText>
            <ListItemText>
              Adress: Blåsippevägen 2, 571 65 Grimstorp
            </ListItemText>
            <ListItemText>Födelsedag: 10 Januari 19977</ListItemText>
            <ListItemText>Mobil: 073-075 37 90</ListItemText>
            <ListItemText>Mail: elin.nilsson.97@hotmail.com</ListItemText>
            <ListItemText>
              LinkedIn:
              <a href="https://www.linkedin.com/in/elin-nilsson-379951157/">
                <strong>Elin Nilsson</strong>
              </a>{" "}
            </ListItemText>
          </ListItem>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <Grid>
            <h3>
              Hallå där! Kul att du är nyfiken på att få veta lite mer om mig!
            </h3>
            <Typography>
              Mitt namn är Elin och jag är 27 år och bor i ett hus i Grimstorp
              tillsammans med min sambo Jens och en kolsvart kattunge vid namn
              Nox.
              Jag håller för stunden på att utbilda mig till Frontendutvecklare
              och har därför med denna sidan planer på att skapa upp en bra 
              portfolie för att underlätta inför mitt framtida arbetssökande.
            </Typography>
            <Typography>
              Om jag känns som någon ni tycker skulle kunna passa in i erat team
              eller om ni har idéer på andra företag så är ni välkomna att höra av 
              er till mig via någon av sätten här ovan! 
            </Typography>
            <Typography>
              Jag är tacksam supertacksam för alla tankar och idéer som kan leda
              mig till att hitta mitt framtida DreamTeam!
            </Typography>
          </Grid>
        </Paper>
      </Paper>
    </Box>
  );
};

export default AboutMe;
