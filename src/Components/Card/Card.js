import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fakeData from "../fakeData";
import { UserContext } from "../Home/Home";
import "./Card.css";

const Card = () => {
  const [selectedPlace, setSelectedPlace, , , , setNavState] = useContext(
    UserContext
  );

  const mostPopularPlace = fakeData.slice(0, 3);
  const [places] = useState(mostPopularPlace);

  const handlePlaceLink = (id) => {
    const selectPlace = places.find((place) => place.id === id);
    console.log(selectPlace);
    setSelectedPlace(selectPlace);
  };
  setNavState(false);
  useEffect(() => {
    setSelectedPlace(places[0]);
  }, []);

  let history = useHistory();
  const handleBooking = (place) => {
    history.push("/booking");
  };

  return (
    <div styles={{ backgroundImage: `url(${selectedPlace.image})` }}>
      <div className="home-banner-section row container d-flex justify-content-between mt-5 pt-5">
        <div className="col-md-6 ml-5 pl-5">
          <h1 style={{ fontFamily: "Bebas Neue" }} className="text-white">
            {selectedPlace.name}
          </h1>
          <p style={{ fontFamily: "Montserrat" }} className="text-white">
            {selectedPlace.details}
          </p>
          <Link
            className="btn btn-warning mx-1 text-white"
            onClick={() => handleBooking(selectedPlace)}
          >
            Booking &#8594;
          </Link>
        </div>
        <div className="col-md-5 d-flex">
          {places.map((place) => {
            return (
              <div className="banner-img">
                <Link onClick={() => handlePlaceLink(place.id)}>
                  <img
                    className="link-img"
                    id="active"
                    src={place.image}
                    alt=""
                  />
                  <h4 className="photo-text text-white ml-4">{place.name}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
