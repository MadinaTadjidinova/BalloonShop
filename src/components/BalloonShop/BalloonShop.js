import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const BalloonShop = () => {
  const prices = {
    red: 5,
    green: 5,
    yellow: 5,
    blue: 5,
    pink: 5,
  };
  
  
  const [colors, setColors] = useState({});

  useEffect(function () {
    axios
      .get("https://builder-69f8f-default-rtdb.firebaseio.com/colors.json")
      .then(response => {
        setColors({ ...response.data });
      });
  }, []);

  const [price, setPrice] = useState(25);

  function addColor(type) {
    const newColors = { ...colors };
    newColors[type]++;
    setPrice(price + prices[type])
    setColors(newColors);
  }

  function removeColor(type) {
    const newColors = { ...colors };
    newColors[type]--;
    setPrice(price - prices[type])
    setColors(newColors);
  }

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview price={price} colors={colors} />
      <BalloonControls
        colors={colors}
        addColor={addColor}
        removeColor={removeColor}
      />
    </div>
  );
};

export default BalloonShop;