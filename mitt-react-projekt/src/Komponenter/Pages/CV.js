import React from "react";
import Box from "@mui/material/Box";
import {
  Paper,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";
import Moodyforest from "../../Images/Moodyforest.jpg";

const CV = () => {
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
          minHeight: "80vh",
          margin: "10vh auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Arbetslivserfarenhet
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
          <ListItem>
            <ListItemText
              primary="Biografansvarig – Eurostar AB, Nässjö"
              secondary="2018 - nu"
            />
            <ul>
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
          <ListItem>
            <ListItemText
              primary="Butikssäljare – Jem & Fix, Nässjö"
              secondary="2012 – 2018"
            />
            <ul>
              <li>Kassahantering</li>
              <li>Varuplock och beställning av varor</li>
              <li>Hantering av kampanjmaterial</li>
              <li>Kundservice</li>
              <li>Inventering</li>
            </ul>
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
          <ListItem>
            <ListItemText
              primary="Nagelterapeut – Mias Hårstudio, Nässjö"
              secondary="2015 – 2016"
            />
            <ul>
              <li>Utfört behandlingar inom nagelvård</li>
              <li>Beställning av varor och material</li>
            </ul>
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff", marginTop: "40px" }}>
          Utbildningar och kurser
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
          <ListItem>
            <ListItemText
              primary="Frontendutvecklare – EC Utbildning"
              secondary="2022 – nu"
            />
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
          <ListItem>
            <ListItemText primary="Starta eget kurs – NNAB" secondary="2018" />
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
          <ListItem>
            <ListItemText
              primary="Förtroendemannautbildning – Fackförbundet Handels"
              secondary="2016 – 2017"
            />
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
          <ListItem>
            <ListItemText
              primary="Hantverksprogrammet stylist– Brinellgymnasiet, Nässjö"
              secondary="2013 – 2016"
            />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          Språkkunskaper
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
            <ListItemText primary="Svenska" />
            <ListItemText primary="Engelska" />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          IT-Kunskaper
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
            <ListItemText primary="Html och css" />
            <ListItemText primary="JavaScript och TypeScript" />
            <ListItemText primary="Angular" />
            <ListItemText primary="React" />
            <ListItemText primary="Firebase" />
            <ListItemText primary="UX och UI" />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          Övrigt
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
            <ListItemText primary="B-körkort" />
            <ListItemText primary="Truckkort A2, A4, B1" />
          </ListItem>
        </Paper>
      </Paper>
    </Box>
  );
};

export default CV;
