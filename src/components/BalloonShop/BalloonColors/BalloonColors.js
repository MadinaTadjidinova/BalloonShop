
import classes from "./BalloonColors.module.css";

import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinckBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";

const BalloonColors = ({ type }) => {
  const types = {
    red: { backgroundImage: `url(${redBackground})`,  width: "50px", height: "170px"},
    blue: { backgroundImage: `url(${blueBackground})`,  width: "50px", height: "170px" },
    yellow: { backgroundImage: `url(${yellowBackground})`,  width: "50px", height: "170px" },
    pinck: { backgroundImage: `url(${pinckBackground})`,  width: "50px", height: "170px" },
    green: { backgroundImage: `url(${greenBackground})`,  width: "50px", height: "170px" },
  };


  // types[type].top = Math.round(Math.random() * 400);
  // types[type].left = Math.round(Math.random() * 400)
  // function getPosition(colorWidth) {
  //   const balloonDiametr = 380;
  //   const balloonRadius = balloonDiametr / 2;
  //   const colorRadius = parseInt(colorWidth) / 2;

  //   const colorTop = Math.round(Math.random() * balloonDiametr);
  //   const colorLeft = Math.round(Math.random() * balloonDiametr);

  //   const distance = Math.sqrt(
  //     Math.pow(colorTop - balloonRadius, 2) + Math.pow(colorLeft - balloonRadius, 2)
  //   ) + colorRadius;

  //   return distance < balloonRadius
  //     ? {
  //       top: colorTop - colorRadius,
  //       left: colorLeft - colorRadius
  //     }
  //     : getPosition(colorWidth);
  // }

  // // Get random position for this ingredient.
  //   const position = getPosition(types[type].width);
  //   types[type].top = position.top + "px";
  //   types[type].left = position.left + "px";
  // // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
}

export default BalloonColors;

