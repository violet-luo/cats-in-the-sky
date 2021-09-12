import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ Header, Content }) => {
  return (
    <div className={"container-fluid " + classes.layout}>
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
