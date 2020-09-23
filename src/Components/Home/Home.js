import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Places from "../Places/Places";
import NotFound from "../NotFound/NotFound";
import Booking from "../Booking/Booking";
import Login from "../Login/Login";
import Checkout from "../Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const UserContext = createContext([]);

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [navState, setNavState] = useState(false);

  return (
    <UserContext.Provider
      value={[
        selectedPlace,
        setSelectedPlace,
        loggedInUser,
        setLoggedInUser,
        navState,
        setNavState,
      ]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Places></Places>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default Home;
