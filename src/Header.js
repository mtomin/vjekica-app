import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import WelcomeMessage from "./WelcomeMessage";

function Header(props) {
  let logout;
  if (props.user.name) {
    logout = <Nav.Link onClick={() => props.onLogout()}>Log out</Nav.Link>;
  }
  return props.user.name ? (
    <Navbar>
      <Navbar.Brand>Navbar with text</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {logout} <br />
        <WelcomeMessage userName={props.user?.name} />
      </Navbar.Collapse>
    </Navbar>
  ) : null;
}

export default Header;
