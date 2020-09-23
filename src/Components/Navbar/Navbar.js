import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Resources/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../Home/Home";
import { handleSignOut } from "../Login/LoginManager";

const Navbar = () => {
  const [, , loggedInUser, setLoggedInUser, navState] = useContext(UserContext);

  const signOut = () => {
    handleSignOut().then((res) => {
      setLoggedInUser(res);
    });
  };

  return (
    <div className="m-4 d-flex justify-content-center align-items-center px-5">
      <img style={{ width: "120px" }} src={logo} alt="" />
      <div className="input-group ">
        <div className="input-group-prepend mb-2">
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            className="text-white m-2"
            icon={faSearch}
          />
        </div>
        <input
          type="text"
          style={{ backgroundColor: "#ffffff4d" }}
          className="form-control color-white"
          placeholder="Search your Destination"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </div>

      {navState ? (
        <button className=" btn text-dark mx-1">News</button>
      ) : (
        <button className=" btn text-white mx-1">News</button>
      )}
      {navState ? (
        <Link to="/" className=" btn text-dark mx-1">
          Destination
        </Link>
      ) : (
        <Link to="/" className=" btn text-white mx-1">
          Destination
        </Link>
      )}

      {navState ? (
        <button className=" btn text-dark mx-1">Blog</button>
      ) : (
        <button className=" btn text-white mx-1">Blog</button>
      )}
      {navState ? (
        <button className=" btn text-dark mx-1">Contact</button>
      ) : (
        <button className=" btn text-white mx-1">Contact</button>
      )}
      {loggedInUser.success ? (
        <Link
          to="/"
          className="btn btn-warning mx-1 text-dark"
          onClick={signOut}
        >
          Logout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-warning mx-1 text-dark">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
