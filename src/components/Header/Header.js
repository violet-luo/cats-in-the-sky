import React from "react";
import classes from "./Header.module.css";

import Logo from "../../images/logo.png";
import FacebookLogo from "../../images/facebook.png";
import InsLogo from "../../images/ins.png";
import Constants from "../../constants";

import { Navs } from "./Navs";

const Header = () => {
  return (
    <div className={classes.Header}>
      <img src={Logo} alt="logo" className={classes.logo} />
      <h1>CATS IN THE SKY</h1>
      <Navs />
      <div className={classes.contact}>
        <p>4:20 AM - 4:20 PM</p>
        <p>Call Us: 000-Nerver</p>
      </div>
      <a href={Constants.FacebookHome}>
        <img src={FacebookLogo} className={classes.outsideLogo} />
      </a>
      <a href={Constants.InsHome}>
        <img src={InsLogo} className={classes.outsideLogo} />
      </a>
    </div>
  )
};

export { Header };