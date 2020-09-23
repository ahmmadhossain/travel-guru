import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const NotFound = () => {
  const [selectedPlace, , , , , setNavState] = useContext(UserContext);
  const bgImage = selectedPlace.image;
  setNavState(true);
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
        <h2 style={{ color: "blue", textAlign: "center" }}>
          Ops! Page Not Found
        </h2>
        <h4 style={{ color: "blue", textAlign: "center" }}>Error: 404</h4>
        <Footer />
      </Typography>
    </React.Fragment>
  );
};

export default NotFound;
