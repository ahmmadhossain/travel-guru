import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { UserContext } from "../Home/Home";
import "./Map.css";
import MyMarker from "./MyMarker";

export default function Map() {
  const [selectedPlace] = useContext(UserContext);
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDILCeyPpjTIjBLaIcs_kP5QIpq5ESvxOQ",
          language: "en",
          region: "US",
        }}
        defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
        defaultZoom={7}
      >
        <MyMarker
          key={selectedPlace.id}
          lat={selectedPlace.lat}
          lng={selectedPlace.lng}
          text={selectedPlace.name}
        />
      </GoogleMapReact>
    </div>
  );
}
