import Button from "../../UI/Button/Button";
import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";

const BalloonControls = ({ 
  colors, 
  addColor, 
  removeColor, 
  startOrdering
  }) => {
  const results = [];
  let total = 0;
  for (const color in colors) {
    total += colors[color]
    results.push(
      <BalloonControl
      key={color}
      count={colors[color]}
        type={color}
        addColor={addColor}
        removeColor={removeColor}
      />
    );
  }



  return(
  <div className={classes.BalloonControls}>
    
    <div>Colors</div>
    {results}
    <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
};

export default BalloonControls;