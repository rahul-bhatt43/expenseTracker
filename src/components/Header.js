import React, { useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
import "./Header.css";
import { themecontext } from "../context/ThemeContext";
import { usegetuserInfo } from "../hooks/usegetuserInfo";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  // const loc = useLocation();
  const { toggle, toggleFunc } = useContext(themecontext);
  const { name, photoURL } = usegetuserInfo();

  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const {name} = usegetuserInfo();

  return (
    localStorage.getItem("auth") && (
      <nav
        style={
          toggle
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "#EC407A" }
        }
      >
        <div className="navcontainer">
          <div
            className="logo"
            style={toggle ? { color: "white" } : { color: "" }}
          >
            <h1>
              Track&nbsp;
              <BsCoin />
            </h1>
          </div>

          <div style={{ display: "flex", gap: "5px" }}>
            {!toggle ? <p>Light</p> : ""}
            <div className="theme">
              <input type="checkbox" id="checktogle" onChange={toggleFunc} />
              <label htmlFor="checktogle" className="slidertoggle" />
            </div>
            {toggle ? <p>Dark</p> : ""}
          </div>

          <div className="userInfo">
            <h3>{name}</h3>
            <img src={photoURL} alt="error laoding" />

            <button onClick={signUserOut}>Sign-Out</button>
          </div>
        </div>
      </nav>
    )
  );
};
