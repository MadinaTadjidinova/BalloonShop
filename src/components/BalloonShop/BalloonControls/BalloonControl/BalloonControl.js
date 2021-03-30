import BalloonColors from "../../BalloonColors/BalloonColors";
import classes from "../BalloonControl/BalloonControl.module.css";

const BalloonControl = ({ type, addColor, removeColor }) => {
  const types = {
    red: { width: "50px", height: "50px", backgroundColor: "red" , borderRadius: "50%"},
    blue: { width: "50px", height: "50px", backgroundColor: "blue" , borderRadius: "50%" },
    yellow: { width: "50px", height: "50px", backgroundColor: "yellow" , borderRadius: "50%" },
    pinck: { width: "50px", height: "50px", backgroundColor: "pink" , borderRadius: "50%"},
    green: { width: "50px", height: "50px", backgroundColor: "green" , borderRadius: "50%"},
  };

  return <div className={classes.BalloonControl} style={types[type]}>
       <button onClick={() => addColor(type)}>+</button>
      <BalloonColors types={type} />
      <button onClick={() => removeColor(type)}>-</button>
  </div>;
};

export default BalloonControl;

 




