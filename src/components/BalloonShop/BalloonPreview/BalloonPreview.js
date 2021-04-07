import BalloonColors from "../BalloonColors/BalloonColors";
import classes from "./BalloonPreview.module.css";

const BalloonPreview = ({ colors, price }) => {
  const result = [];

  for (const color in colors) {
    for (let i = 0; i < colors[color]; i++) {
      result.push(
        <BalloonColors key={colors[color] + color} type={colors[color]} />
      );
    }
  }

  return (
    <div className={classes.BalloonPreview}>
      <div className={classes.balloon}>
        <div className={classes.colors}>{result}</div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
};

export default BalloonPreview;
