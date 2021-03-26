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
  

  return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
}

export default BalloonColors;

