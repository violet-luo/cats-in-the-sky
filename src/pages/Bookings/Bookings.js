import React from "react";
import classes from "./Bookings.module.css";

import catnip from "../../images/catnip.png";
import whisker from "../../images/whisker.png";
import thirsty from "../../images/thirsty.png";
import kitty from "../../images/kitty.png";

const Bookings = () => {
  const cats = [
    { img: catnip, name: "Catnip (Standard Visit)" },
    { img: whisker, name: "Whisker Wednesday" },
    { img: thirsty, name: "Thirsty Purssdays" },
    { img: kitty, name: "Kitty Brunch" }
  ]

  const renderCats = () => {
    return cats.map((cat) => {
      return (
        <div className={classes.cat} key={cat.name}>
          <div className={classes.imgBox}>
            <img src={cat.img} alt="" />
          </div>
          <div className={classes.catName}>
            <p>{cat.name}</p>
            <a href={`https://google.com`}>
              <button>Book</button>
            </a>
          </div>
        </div>
      )
    })
  }
  return <div className={classes.Bookings}>{renderCats()}</div>;
};

export { Bookings };