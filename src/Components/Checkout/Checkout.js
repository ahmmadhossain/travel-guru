import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../Home/Home";
import img1 from "../Resources/Image/Rectangle 26.png";
import img2 from "../Resources/Image/Rectangle 27.png";
import img3 from "../Resources/Image/Rectangle 28.png";
import icon from "../Resources/Icon/star_1_.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";

const Checkout = () => {
  const [selectedPlace, , , , , setNavState] = useContext(UserContext);
  setNavState(true);
  return (
    <Container>
      <Navbar />
      <Row>
        <Col md={6}>
          <h3 className="ml-3">Stay in {selectedPlace.name}</h3>
          <div className="d-flex justify-content-center align-items-center my-2">
            <div className="col-md-5">
              <img className="w-100" src={img1} alt="" />
            </div>
            <div className="col-md-7">
              <h5>Light bright airy stylish apt & safe peaceful stay</h5>
              <p className="mb-0">
                4 guest 2bedrooms 2beds 2baths <br /> Wifi Air condition Kitchen{" "}
                <br /> Cancellation flexibility available
              </p>
              <img style={{ width: "20px" }} src={icon} alt="" />
              <span className="font-weight-bold ml-1">4.9(20)</span>
              <span>
                <span className="font-weight-bold ml-5">$34/</span>night
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="col-md-5">
              <img className="w-100" src={img2} alt="" />
            </div>
            <div className="col-md-7">
              <h5>Apartment in Lost Panorama</h5>
              <p className="mb-0">
                4 guest 2bedrooms 2beds 2baths <br /> Wifi Air condition Kitchen{" "}
                <br /> Cancellation flexibility available
              </p>
              <img style={{ width: "20px" }} src={icon} alt="" />
              <span className="font-weight-bold ml-1">4.8(10)</span>
              <span>
                <span className="font-weight-bold ml-5">$52/</span>night
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="col-md-5">
              <img className="w-100" src={img3} alt="" />
            </div>
            <div className="col-md-7">
              <h5>AR Lounge & Pool (r&r + b&b)</h5>
              <p className="mb-0">
                4 guest 2bedrooms 2beds 2baths <br /> Wifi Air condition Kitchen{" "}
                <br /> Cancellation flexibility available
              </p>
              <img style={{ width: "20px" }} src={icon} alt="" />
              <span className="font-weight-bold ml-1">4.9(25)</span>
              <span>
                <span className="font-weight-bold ml-5">$44/</span>night
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} className="ml-auto">
          <Map />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Checkout;
