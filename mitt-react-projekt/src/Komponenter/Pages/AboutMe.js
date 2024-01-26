import React from "react";
import Box from "@mui/material/Box";
import Moodyforest from "../../Images/Moodyforest.jpg";
import Image1 from "../../Images/20180227_124217.png";
import Image2 from "../../Images/Snapchat-410240125.jpg";
import { useTheme } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";


const AboutMe = () => {
  const theme = useTheme();
  const inSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          marginTop: "10vh",
          pt: "20px",
          bgcolor: "#191B1D",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Kontaktinformation
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />
      </Paper>

      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "80%",
          display: "flex",
          flexDirection: inSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: inSmallScreen ? "center" : "space-around",
        }}
      >
        <div style={{ flex: 2, marginBottom: inSmallScreen ? "20px" : 0 }}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "#333",
              width: inSmallScreen ? "100%" : "80%",
              color: "#fff",
              padding: "20px",
              marginLeft: inSmallScreen ? 0 : "8rem",
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
              <ListItemText>Födelsedag: 10 Januari 1997</ListItemText>
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
        </div>

        <div
          style={{
            flex: 1,
            marginBottom: inSmallScreen ? "20px" : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Image2}
            alt="Selfie"
            style={{ maxWidth: "12rem", height: "auto" }}
          />
        </div>
      </Paper>

      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "80%",
          display: "flex",
          flexDirection: inSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: inSmallScreen ? "center" : "space-around",
        }}
      >
        <div
          style={{
            flex: 1,
            marginBottom: inSmallScreen ? "20px" : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Image1}
            alt="Selfie"
            style={{ maxWidth: "12rem", height: "auto" }}
          />
        </div>

        <div style={{ flex: 2, marginBottom: inSmallScreen ? "20px" : 0 }}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "#333",
              width: inSmallScreen ? "100%" : "80%",
              color: "#fff",
              padding: "20px",
              margin: inSmallScreen ? 0 : "4rem",
            }}
          
          >
            <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
              Hallå där! Kul att du är nyfiken på att få veta lite mer om mig!
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Mitt namn är Elin och jag är 27 år och bor i ett hus i Grimstorp
              tillsammans med min sambo Jens och en kolsvart kattunge vid namn
              Nox. Jag håller för stunden på att utbilda mig till
              Frontendutvecklare och har därför med denna sidan planer på att
              skapa upp en bra portfolie för att underlätta inför mitt framtida
              arbetssökande.
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Om jag känns som någon ni tycker skulle kunna passa in i erat team
              eller om ni har idéer på andra företag så är ni välkomna att höra
              av er till mig via någon av sätten här ovan!
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Jag är evigt supertacksam för alla tankar och idéer som kan leda
              mig till att hitta mitt framtida DreamTeam!
            </Typography>
          </Paper>
        </div>
      </Paper>
    </Box>
  );
};

export default AboutMe;
