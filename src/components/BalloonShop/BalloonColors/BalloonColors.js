import React from "react";

import classes from "./BalloonColors.module.css";
import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinkBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";
import purpleBackground from "../../../images/purple_balloon.png";

const BalloonColors = ({ type, changeColor }) => {
  const types = {
    red: {
      backgroundImage: `url(${redBackground})`,
      width: "50px",
      height: "170px",
    },
    blue: {
      backgroundImage: `url(${blueBackground})`,
      width: "50px",
      height: "170px",
    },
    yellow: {
      backgroundImage: `url(${yellowBackground})`,
      width: "50px",
      height: "170px",
    },
    pink: {
      backgroundImage: `url(${pinkBackground})`,
      width: "50px",
      height: "170px",
    },
    green: {
      backgroundImage: `url(${greenBackground})`,
      width: "50px",
      height: "170px",
    },
    purple: {
      backgroundImage: `url(${purpleBackground})`,
      width: "50px",
      height: "170px",
    },
  };

  return (
    <div className={classes.BalloonColors} style={types[type]}>
      <div className="animation"></div>
    </div>
  );
};

export default React.memo(BalloonColors);

