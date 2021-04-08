import Button from "../../../UI/Button/Button";
import BalloonColors from "../../BalloonColors/BalloonColors";
import classes from "../BalloonControl/BalloonControl.module.css";
import expp from "../../../../audio/exp.mp3"

const BalloonControl = ({ type, addColor, removeColor }) => {
  function playExp(){
      let exp = new Audio();
      exp.preload ='auto';
      exp.src = expp
      exp.play()
      
  }
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
  };

  return (
    <div className={classes.BalloonControl} style={types[type]}>
      <Button onClick={() => addColor(type)}>+</Button>

      <BalloonColors type={type} />

      <Button onClick={() => {removeColor(type); playExp()}}>-</Button>
    </div>
  );
};

export default BalloonControl;
