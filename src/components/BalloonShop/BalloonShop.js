import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState } from "react";

const BalloonShop = () => {
  const [colors, setColors] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    pinck: 0,
    green: 0,
  });

  function addColor(type) {
    const newColors = { ...colors };
    newColors[type]++;
    setColors(newColors);
  }  

  function removeColor(type) {
    const newColors = { ...colors };
    newColors[type]--;
    setColors(newColors);
  }

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview colors={colors} />
      <BalloonControls
        colors={colors}
        addColor={addColor}
        removeColor={removeColor}
      />
    </div>
  );
};

export default BalloonShop;