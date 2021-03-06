import classes from "./BalloonColors.module.css";
import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinkBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";
import purpleBackground from "../../../images/purple_balloon.png";
import React from 'react';

const BalloonColors = ({ type }) => {

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
  
  
  // let custom = <div className={classes.BalloonColors}><div className={classes.Balloon} style={{ ...types['custom'] }}></div></div>;
  // if (types[type]) {
  //   custom = <div className={classes.BalloonColors}><div className={classes.Balloon} style={types[type]}></div></div>;
  // }

  // return (<div>
  //   {custom}

  // </div>
    
  //   );

  return <div className={classes.BalloonColors}><div className={classes.Balloon} style={types[type]}></div></div>;
};

export default React.memo(BalloonColors);