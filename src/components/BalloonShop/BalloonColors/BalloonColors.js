import React from "react";

import classes from "./BalloonColors.module.css";

import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinkBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";

const BalloonColors = ({ type }) => {
  const types = {
    red: { backgroundImage: `url(${redBackground})`,  width: "50px", height: "170px"},
    blue: { backgroundImage: `url(${blueBackground})`,  width: "50px", height: "170px" },
    yellow: { backgroundImage: `url(${yellowBackground})`,  width: "50px", height: "170px" },
    pink: { backgroundImage: `url(${pinkBackground})`,  width: "50px", height: "170px" },
    green: { backgroundImage: `url(${greenBackground})`,  width: "50px", height: "170px" },
  };

    return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
  }

  export default React.memo(BalloonColors);

//   function getPosition(colorWidth) {
//     const balloonDiametr = 330;
//     const balloonRadius = balloonDiametr / 10;
//     const colorRadius = parseInt(colorWidth) / 8;

//     const colorTop = Math.round(Math.random() * balloonDiametr);
//     const colorLeft = Math.round(Math.random() * balloonDiametr);

//     const distance = Math.sqrt(
//       Math.pow(colorTop - balloonRadius, 5) + Math.pow(colorLeft - balloonRadius, 1)
//     ) + colorRadius;

//     return distance < balloonRadius
//       ? {
//         top: colorTop - colorRadius,
//         left: colorLeft - colorRadius
//       }
//       : getPosition(colorWidth);
//   }

//   if (!fixed) {
//     const position = getPosition(types[type].width);
//     types[type].top = position.top + "px";
//     types[type].left = position.left + "px";
//     // Get random rotation for this ingredient.
//     types[type].transform = `rotate(${Math.round(Math.random() * 0)}deg)`;
//   }


//   return (
//     <div className={classes.BalloonColors} style={types[type]}></div>
//   );
// }

// export default React.memo(BalloonColors);













// import React, { memo } from "react";
// import classes from "./BalloonColors.module.css";

// export default memo(({ type }) => {
//   const toysClasses = [classes.Toys, classes[type]];

//   const pd = 40;
//   const th = 380;
//   const tw = 260;

//   let stylePos = null;
//   const getPosition = (ir) => {
//     const ix = Math.floor(Math.random() * tw, 5);
//     const iy = Math.floor(Math.random() * th, 12);

//     const distance =
//       Math.sqrt(Math.pow(ix - th, 2) + Math.pow(iy - th, 2)) + ir;

//     return distance < th ? { x: ix - ir, y: iy - ir } : getPosition(pd);
//   };

//   switch (type) {
//     case "red_balloon":
//       toysClasses.push(classes.red_balloon);
//       break;
//     case "yellow_balloon":
//       toysClasses.push(classes.yellow_balloon);
//       break;
//     case "pink_balloon":
//       toysClasses.push(classes.pink_balloon);
//       break;
//     case "green_balloon":
//       toysClasses.push(classes.green_balloon);
//       break;
//     case "blue_balloon":
//       default:
//       toysClasses.push(classes.green_balloon);
//       break;
 
//   }

//   const position = getPosition(110 / 6);

//   stylePos = {
//     position: "absolute",
//     top: position.y + "px",
//     left: position.x + "px",
//   };
//   return <div style={stylePos} className={toysClasses.join(" ")}></div>;
// });