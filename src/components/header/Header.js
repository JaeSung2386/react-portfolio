import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css";

import Social from "./Social";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header">
      <div className="logo">WebVeloper</div>
      <Navigation />
      <Social />
    </div>
  );
}

export default Header;
