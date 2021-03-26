import classes from "./BalloonControls.module.css";

const BalloonControls = () => {
  for (const color in colors) {
    for (let i = 0; i < colors[color]; i++) {
        result.push(color)
    }
}


  return (
    <div className={classes.BalloonControls}>{result}</div>
  );
}

export default BalloonControls;