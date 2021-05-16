import Button from "../../UI/Button/Button";
import BalloonControl from "./BalloonControl/BalloonControl";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../store/action/shop";
import classes from "./BalloonControls.module.css";
import { useState } from "react";
const BalloonControls = ({ colors, startOrdering, count }) => {
  const dispatch = useDispatch();
  const results = [];
  let total = 0;
  const predColors = ["blue", "green", "pink", "purple", "red", "yellow"];
  for (const key in predColors) {
    const color = predColors[key];
    total += colors[color];
    results.push(
      <BalloonControl key={color} count={colors[color]} type={color} />
    );
  }

  const [changeColor, setChangeColor] = useState(0);
  return (
    <div className={classes.BalloonControls}>
      <strong className={classes.strong}>Colors</strong>

      {results}

      <div className={classes.btn1}>
        <Button
          style={{ height: "38px", width: "44px" }}
          onClick={() => dispatch(add(changeColor))}
        >
          +
        </Button>
      </div>

      <div className={classes.test}>
        <input
          className={classes.test}
          type="color"
          value={changeColor}
          onChange={(event) => setChangeColor(event.target.value)}
        />
      </div>

      <div className={classes.btn2}>
        <Button
          style={{ height: "38px", width: "39px" }}
          onClick={() => dispatch(remove(changeColor))}
          disabled={!count}
        >
          -
        </Button>
      </div>

      <Button
        style={{ position: "relative", bottom: "90px" }}
        className={classes.order}
        disabled={!total}
        onClick={startOrdering}
      >
        Order
      </Button>
    </div>
  );
};

export default BalloonControls;
