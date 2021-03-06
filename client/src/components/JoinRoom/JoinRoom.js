import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinRoom.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="joinImageContainer">
          <img
            className="joinImage"
            src="https://source.unsplash.com/800x600/?talk"
            alt="home"
          />
        </div>
        <div className="joinFormContainer" component={Paper}>
          <div className="joinFormBox">
            <div className="joinTitle">
              <Typography component="h1" variant="h5">
                Talk About
              </Typography>
            </div>
            <form className="joinForm" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="room"
                label="room"
                type="room"
                id="room"
                autoComplete="current-password"
                onChange={(e) => setRoom(e.target.value)}
              />
              <div className="buttonBox mt-10">
                <Link
                  className="joinButtonLink"
                  onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                  to={`/chat?name=${name}&room=${room}`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="joinButton mt-20"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
