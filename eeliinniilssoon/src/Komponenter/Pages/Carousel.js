import React from "react";
import { Box } from "@mui/material";
import { useDarkMode } from "../../DarkModeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingpageopenImage from "../Images/vårdappen1.png";
import Coolfashion1 from "../Images/CoolFashion1.png";
import Skvaller1 from "../Images/Skvaller1.png";
import Tentamenbloggen1 from "../Images/Tentamenbloggen1.png";
import Todo1 from "../Images/Todo1.png";
import StädafintAB1 from "../Images/StädafintAB1.png";
import FriendlycornerJkpg from "../Images/FriendlyCornerJkpg.png";
import Vidici1 from "../Images/Vidici1.png";

const Carousel = () => {
  const { darkMode } = useDarkMode();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
  };

  return (
      <Box
      sx={{
        padding: "20px",
        bgcolor: darkMode ? "#242424" : "#fff",
        color: darkMode ? "#fff" : "#000"
       }}>
        <h2 style={{ textAlign: "center", margin: "40px" }}>Projekt jag har varit med och skapat</h2>

    <Slider {...settings}>
      <div>
        <img src={LandingpageopenImage} alt="Vårdappen" style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={Skvaller1} alt="Skvaller"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={Coolfashion1} alt="Coolfashion"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={Tentamenbloggen1} alt="Tentamenbloggen"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={Todo1} alt="Todo"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={StädafintAB1} alt="Städa Fint AB"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={FriendlycornerJkpg} alt="Friendly corner Jönköping"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
      <div>
        <img src={Vidici1} alt="Vidici"  style={{ width: "100%", padding:"10px", height: "auto"}}/>
      </div>
    </Slider>
    </Box>
  );
};

export default Carousel;