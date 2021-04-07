import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";

const BalloonControls = ({ colors, addColor, removeColor }) => {
  const results = [];
  let total = 0;
  for (const color in colors) {
    total += colors[color]
    results.push(
      <BalloonControl
        type={color}
        addColor={addColor}
        removeColor={removeColor}
      />
    );
  }



  return(
  <div className={classes.BalloonControls}>
    {results}
    <button disabled={!total}>Order</button>
    </div>
  );
};

export default BalloonControls;