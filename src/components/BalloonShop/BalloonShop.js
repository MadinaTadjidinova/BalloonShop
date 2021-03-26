import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import {useState} from "react"

const BalloonShop = () => {
  const [colors, useColors] = useState({
    red: 20,
    blue: 1,
    yellow: 2,
    pinck: 2,
    green: 1,
  });

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview colors={colors}/>
      <BalloonControls colors={colors} />
    </div>
  );
}

export default BalloonShop;