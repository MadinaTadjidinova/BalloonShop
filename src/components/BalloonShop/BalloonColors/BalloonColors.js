import React from "react";

import classes from "./BalloonColors.module.css";

import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinckBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";

const BalloonColors = ({ type, fixed }) => {
  const types = {
    red: { backgroundImage: `url(${redBackground})`,  width: "50px", height: "170px"},
    blue: { backgroundImage: `url(${blueBackground})`,  width: "50px", height: "170px" },
    yellow: { backgroundImage: `url(${yellowBackground})`,  width: "50px", height: "170px" },
    pinck: { backgroundImage: `url(${pinckBackground})`,  width: "50px", height: "170px" },
    green: { backgroundImage: `url(${greenBackground})`,  width: "50px", height: "170px" },
  };


  function getPosition(colorWidth) {
    const balloonDiametr = 260;
    const balloonRadius = balloonDiametr / 10;
    const colorRadius = parseInt(colorWidth) / 8;

    const colorTop = Math.round(Math.random() * balloonDiametr);
    const colorLeft = Math.round(Math.random() * balloonDiametr);

    const distance = Math.sqrt(
      Math.pow(colorTop - balloonRadius, 5) + Math.pow(colorLeft - balloonRadius, 1)
    ) + colorRadius;

    return distance < balloonRadius
      ? {
        top: colorTop - colorRadius,
        left: colorLeft - colorRadius
      }
      : getPosition(colorWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 0)}deg)`;
  }


  return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
}

export default React.memo(BalloonColors);