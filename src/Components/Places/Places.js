import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Places = () => {
  const [selectedPlace] = useContext(UserContext);
  const bgImage = selectedPlace.image;

  return (
    <React.Fragment>
      <Typography
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          minHeight: "100%",
          position: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.9",
        }}
      >
        <Navbar />
        <Card />
        <Footer />
      </Typography>
    </React.Fragment>
  );
};

export default Places;
