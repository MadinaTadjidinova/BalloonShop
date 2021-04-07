import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";

const BalloonControls = ({  addColor, removeColor }) => {
  const results = [];
  const colors = [
    "red",
    "blue",
    "pink",
    "green",
    "yellow",
  ];
  for (const color in colors) {
    results.push(
      <BalloonControl
        type={colors[color]}
        key={colors[color]}
        addColor={addColor}
        removeColor={removeColor}
      />
    );
  }
  return(
  <div className={classes.BalloonControls}>{results}</div>
  );
};

export default BalloonControls;