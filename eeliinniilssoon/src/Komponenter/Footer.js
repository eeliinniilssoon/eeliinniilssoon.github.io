import React from 'react';
import ReactDOM from 'react-dom/client';
import { useDarkMode } from "../DarkModeContext";
import Box from "@mui/material/Box";

const Footer = () => {
    const { toggleDarkMode, darkMode } = useDarkMode();

    return (
        <Box
            sx={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: darkMode ? "#242424" : "#fff",
                color: darkMode ? "#fff" : "#000",
                borderTop: darkMode ? "1px solid #333" : "1px solid #ccc",
            }}
        >
            <p>&copy; 2024 Eeliinniilssoon.github.io.  All rights reserved.</p>
        </Box>
    );
};

export default Footer;
