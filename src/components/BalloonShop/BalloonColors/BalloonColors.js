import React from "react";

import classes from "./BalloonColors.module.css";

import redBackground from "../../../images/red_balloon.svg";
import yellowBackground from "../../../images/yellow_balloon.svg";
import pinkBackground from "../../../images/pink_balloon.svg";
import greenBackground from "../../../images/green_balloon.svg";
import blueBackground from "../../../images/blue_balloon.svg";

const BalloonColors = ({ type }) => {
  const types = {
    red: { backgroundImage: `url(${redBackground})`,  width: "50px", height: "170px", animation: "animation-delay: .2s", transform: "rotate(90deg)"},
    blue: { backgroundImage: `url(${blueBackground})`,  width: "50px", height: "170px", animation: "animation-delay: .2s", transform: "rotate(90deg)" },
    yellow: { backgroundImage: `url(${yellowBackground})`,  width: "50px", height: "170px", animation: "animation-delay: .2s", transform: "rotate(90deg)" },
    pink: { backgroundImage: `url(${pinkBackground})`,  width: "50px", height: "170px", animation: "animation-delay: .2s", transform: "rotate(90deg)" },
    green: { backgroundImage: `url(${greenBackground})`,  width: "50px", height: "170px", animation: "animation-delay: .2s", transform: "rotate(90deg)" },
  };


  // const animation ={
  //   red: { },
  //   blue: { },
  //   yellow: { },
  //   pink: { },
  //   green: { },


  //   @Keyframes animate{
  //     0%{
  //       transform: translateY(0px);
  //     }
  //     50%{
  //       transform: translateY(-30px);
  //     }
  //     100%{
  //       transform: translateY(0px);
  //     }
  //   }
  // }


    return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
  }

  export default React.memo(BalloonColors);

//   function getPosition(ingredientWidth) {
//     const pizzaDiameter = 380;
//     const pizzaRadius = pizzaDiameter / 2;
//     const ingredientRadius = parseInt(ingredientWidth) / 2;

//     const ingredientTop = Math.round(Math.random() * pizzaDiameter);
//     const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

//     const distance = Math.sqrt(
//       Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
//     ) + ingredientRadius;

//     return distance < pizzaRadius
//       ? {
//         top: ingredientTop - ingredientRadius,
//         left: ingredientLeft - ingredientRadius
//       }
//       : getPosition(ingredientWidth);
//   }

//   // Get random position for this ingredient.
//   if (!fixed) {
//     const position = getPosition(types[type].width);
//     types[type].top = position.top + "px";
//     types[type].left = position.left + "px";
//   }
//   // Get random rotation for this ingredient.
//   types[type].transform = `rotate(${Math.round(Math.random())}deg)`;


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