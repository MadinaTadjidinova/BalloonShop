import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";

const BalloonControls = ({ colors, addColor, removeColor }) => {
  const results = [];
  for (const color in colors) {
    results.push(
      <BalloonControl
        type={color}
        addColor={addColor}
        removeColor={removeColor}
      />
    );
  }
  return (<div className={classes.BalloonControls}>{results}</div> );
};

export default BalloonControls;

         