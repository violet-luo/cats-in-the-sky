import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import classes from "./Navs.module.css";

const Navs = () => {
  const { pathname } = useLocation();
  
  const navs = [
    { name: "HOME", path: "/home" },
    { name: "BOOKINGS", path: "/bookings" },
    { name: "ADOPTION", path: "/adoption" },
    { name: "PHOTO ALBUM", path: "/photo-album" },
  ];

  const renderNavs = () => {
    return navs.map((nav, index) => {
      return (
        <li key={nav.name}>
          <Link to={nav.path}>
            {/* current path is red, others are white */}
            <span className={nav.path === pathname ? classes.activated : ""}>
              {nav.name}
            </span>
            {/* every path has a trailing / except for the last one */}
            {index < navs.length - 1 ? " /" : ""}
            &nbsp;
          </Link>
        </li>
      );
    });
  };
  return <ul className={classes.navs}>{renderNavs()}</ul>;
};

export { Navs };