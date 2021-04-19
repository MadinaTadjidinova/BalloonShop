import React from 'react'
import Button from "../../../UI/Button/Button";
import BalloonColors from "../../BalloonColors/BalloonColors";
import classes from "../BalloonControl/BalloonControl.module.css";

const BalloonControl = ({ type, addColor, removeColor }) => {
  // const [animate, setAnimate] = React.useState(0)



  const types = {
    red: {
      width: "50px",
      height: "50px",
      backgroundColor: "red",
      borderRadius: "50%",
    },
    blue: {
      width: "50px",
      height: "50px",
      backgroundColor: "blue",
      borderRadius: "50%",
    },
    yellow: {
      width: "50px",
      height: "50px",
      backgroundColor: "yellow",
      borderRadius: "50%",
    },
    pink: {
      width: "50px",
      height: "50px",
      backgroundColor: "pink",
      borderRadius: "50%",
    },
    green: {
      width: "50px",
      height: "50px",
      backgroundColor: "green",
      borderRadius: "50%",
    },
    purple: {
      width: "50px",
      height: "50px",
      backgroundColor: "purple",
      borderRadius: "50%",
    },
  };

  return (
    <div className={classes.BalloonControl} style={types[type]}>

      <Button  className='plus' onClick={() => {addColor(type)}}>+</Button>
      <BalloonColors type={type} />

      <Button className='minus' onClick={() => {removeColor(type)}}>-</Button>

      {/* <Button className='minus' onClick={() => {removeColor(type); playExp()}, setAnimate(0) }onAnimationEnd={() => setAnimate(0)}
      animate={animate}>-</Button> */}
    </div>
  );
};

export default BalloonControl;
