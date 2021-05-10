import Button from "../../UI/Button/Button";
import BalloonControl from "./BalloonControl/BalloonControl";
import classes from "./BalloonControls.module.css";
import { useState } from "react";
const BalloonControls = ({ colors, startOrdering }) => {
  const results = [];
  let total = 0;
  for (const color in colors) {
    total += colors[color];
    results.push(
      <BalloonControl key={color} count={colors[color]} type={color} />
    );
  }

  const [changeColor, setChangeColor] = useState(null);

  return (
    <div className={classes.BalloonControls}>
      <strong>Colors</strong>

      {results}

    <div className={classes.btn1}>
      <Button style={{ height: "38px", width: "44px" }}>+</Button>
    </div>

    <div className={classes.test}>
      <input
        className={classes.test}
        type="color"
        value={changeColor}
        onChange={(chg) => setChangeColor(chg.target.value)}
      />
    </div>

    <div className={classes.btn2}>
      <Button style={{ height: "38px", width: "39px" }}>-</Button>
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
