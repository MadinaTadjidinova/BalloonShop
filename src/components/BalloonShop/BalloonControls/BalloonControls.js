// import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";

const BalloonControls = ({type}) => {
  return (
    <div className={classes.BalloonControls}>
      <button className = {classes.ControlA}>-</button>
     {type}
     <button className = {classes.ControlB}>+</button>
      </div>
  );
}

export default BalloonControls;
