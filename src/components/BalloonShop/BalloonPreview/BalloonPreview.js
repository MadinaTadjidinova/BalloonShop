import BalloonColors from "../BalloonColors/BalloonColors";
import classes from "./BalloonPreview.module.css";

const BalloonPreview = ({ colors, price }) => {
  const result = [];

  for (const color in colors) {
    for (let i = 0; i < colors[color]; i++) {
      result.push(<BalloonColors key={color + i} type={color} />);
    }
  }

  return (
    <div className={classes.Preview}>
      <div className={classes.BalloonPreview}>
        <div className={classes.colors}>{result}</div>
      </div>
      <div>
        <div className={classes.price}>{price} som</div>
      </div>
    </div>
  );
};

export default BalloonPreview;