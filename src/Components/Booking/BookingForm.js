import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { UserContext } from "../Home/Home";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "15px",
      marginBottom: "15px",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const BookingForm = () => {
  const classes = useStyles();
  let history = useHistory();
  const handleBookingBtn = () => {
    history.push("/checkout");
  };

  const [selectedPlace] = useContext(UserContext);

  return (
    <div className="home-section booking-section pb-5">
      <div className="container mt-5 pt-3">
        <div className="row d-flex justify-content-between">
          <div className="col-md-5">
            <h1 className="text-white">{selectedPlace.name}</h1>
            <p className="text-white">{selectedPlace.details}</p>
          </div>
          <div className="col-md-6">
            <div class="card">
              <div class="card-body">
                <form className="from-group ">
                  <label htmlFor="">Origin</label>
                  <input
                    type="text"
                    className="form-control booking-input mb-2"
                    name=""
                    placeholder="Dhaka"
                    id=""
                  />
                  <label htmlFor="">Destination</label>
                  <input
                    type="text"
                    className="form-control booking-input mb-2"
                    name=""
                    placeholder={selectedPlace.name}
                    id=""
                  />
                  <div class="row d-flex justify-content-between mb-3">
                    <div class="col p-0 mr-3">
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="From"
                          type="date"
                          defaultValue="2020-12-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </div>
                    <div class="col p-0">
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="To"
                          type="date"
                          defaultValue="2020-12-25"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </div>
                  </div>
                </form>
                <button
                  onClick={handleBookingBtn}
                  class="btn btn-lg btn-warning btn-block"
                >
                  Start Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
