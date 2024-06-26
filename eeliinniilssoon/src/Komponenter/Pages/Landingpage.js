import React from 'react';
import { Box } from "@mui/material";
import { useDarkMode } from "../../DarkModeContext";
import styles from "../CSS/Landingpage.css";
import ProfilePic from "../Images/20180227_124217.png";
import Carousel from "./Carousel";

const Landingpage = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      {/* Stor vy */}
      <Box id="largeLandingPage"
        sx={{
          display: "flex",
          height: "100vh",
          bgcolor: darkMode ? "#242424" : "#D9D9D9",
          color: darkMode ? "#fff" : "#000"
        }}
      >
        {/* Left side text box */}
        <Box
          elevation={4}
          sx={{
            width: "50%",
            minHeight: "60vh",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "36px", fontWeight: "normal" }}>En framtida frontendutvecklare <br></br> på uppgång</h2>
          <h3 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "normal" }}>Hallå där! Kul att du är nyfiken på att få <br></br>veta lite mer om mig!</h3>
          <p style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "normal" }}>
            Mitt namn är Elin och jag är 27 år och bor i en lägenhet i Nässjö tillsammans med min sambo Jens och en kolsvart kattunge vid namn Nox. Jag håller för stunden på att utbilda mig till Frontendutvecklare och har därför med denna sidan planer på att skapa upp en bra portfolie för att underlätta inför mitt framtida arbetssökande.
          </p>
          <p style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "normal" }}>
            Om jag känns som någon ni tycker skulle kunna passa in i erat team eller om ni har idéer på andra företag så är ni välkomna att höra av er till mig via någon av sätten här ovan!
          </p>
          <p style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "normal" }}>
            Jag är evigt supertacksam för alla tankar och idéer som kan leda mig till att hitta mitt framtida DreamTeam!
          </p>
        </Box>

        {/* Right side image */}
        <Box
          sx={{
            width: "50%",
            backgroundImage: `url(${ProfilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 30%"
          }}
        ></Box>
      </Box>

      {/* Tabletvy */}
      <Box id="smallLandingPage"
        sx={{
          display: "none", // Dölj i stor vy
          height: "100vh",
          bgcolor: darkMode ? "#242424" : "#D9D9D9",
          color: darkMode ? "#fff" : "#000",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
        component="section"
        className="tablet-view"
      >
        <Box
          elevation={4}
          sx={{
            width: "100%",
            padding: "20px",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>En framtida frontendutvecklare på uppgång</h2>
          <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>Hallå där! Kul att du är nyfiken på att få veta lite mer om mig!</h3>
          <p style={{ marginBottom: "10px", fontWeight: "normal" }}>
            Mitt namn är Elin och jag är 27 år och bor i en lägenhet i Nässjö tillsammans med min sambo Jens och en kolsvart kattunge vid namn Nox. Jag håller för stunden på att utbilda mig till Frontendutvecklare och har därför med denna sidan planer på att skapa upp en bra portfolie för att underlätta inför mitt framtida arbetssökande.
          </p>
          <p style={{ marginBottom: "10px", fontWeight: "normal" }}>
            Om jag känns som någon ni tycker skulle kunna passa in i erat team eller om ni har idéer på andra företag så är ni välkomna att höra av er till mig via någon av sätten här ovan!
          </p>
          <p style={{ marginBottom: "10px", fontWeight: "normal" }}>
            Jag är evigt supertacksam för alla tankar och idéer som kan leda mig till att hitta mitt framtida DreamTeam!
          </p>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${ProfilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 30%",
            minHeight: "40vh",
            paddingBottom: "340px"
          }}
        ></Box>
      </Box>
      <Carousel/>
    </>
  );
};

export default Landingpage;
