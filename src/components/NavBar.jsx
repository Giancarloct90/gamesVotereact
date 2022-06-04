// LIBRARIES
import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";

import { socket } from "../socket/socket";
const NavBar = () => {
  const [serverStatus, setServerStatus] = useState("red");

  socket.on("connect", () => setServerStatus("#7CFC00"));
  socket.on("disconnect", () => setServerStatus("red"));

  return (
    <div className="header">
      <nav>
        <Link className="logo" to={"/"}>
          Game Sockets
        </Link>
        <ul className="navLinks">
          <NavLink
            exact
            activeClassName="navlinkActive"
            className="navlin"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            activeClassName="navlinkActive"
            className="navlin"
            to={"/vote"}
          >
            VOTE
          </NavLink>
          <NavLink
            activeClassName="navlinkActive"
            className="navlin"
            to={"/result"}
          >
            RESULT
          </NavLink>
          <div
            className=""
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: serverStatus,
              display: "flex",
            }}
          ></div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
