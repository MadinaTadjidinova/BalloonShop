import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState } from "react";

const BalloonShop = () => {
  const [colors, setColors] = useState({
    red: 1,
    blue: 1,
    yellow: 1,
    pinck: 2,
    green: 1,
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