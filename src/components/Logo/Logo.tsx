import React from "react";
import appLogo from "./logo.svg";

import "./Logo.scss";

function Logo() {
  return (
    <div className="logo">
      <img src={appLogo} alt="" />
    </div>
  );
}

export default Logo;
