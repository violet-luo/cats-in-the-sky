import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { Bookings } from "../../pages/Bookings/Bookings";
import { Adoption } from "../../pages/Adoption/Adoption";
import { PhotoAlbum } from "../../pages/PhotoAlbum/PhotoAlbum";

const Content = () => {
  return ( 
    // add overflow so the left side of the Adoption page stays still while scrolling down the right side
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Switch>
        {/* two paths to home page */}
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/adoption">
          <Adoption />
        </Route>
        <Route path="/photo-album">
          <PhotoAlbum />
        </Route>
      </Switch>
    </div>
  )
};

export { Content };