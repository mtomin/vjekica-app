import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";

function WelcomeMessage(props) {
  if (props.userName) {
    return (
      <Navbar.Text>
        Signed in as: <strong>{props.userName}</strong>
      </Navbar.Text>
    );
  }
}

export default WelcomeMessage;
