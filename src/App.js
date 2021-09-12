import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Layout from "./Layout";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Layout Header={Header} Content={Content} />
      </div>
    </Router>
  )
};

export default App;
