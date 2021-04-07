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
  const [price, setPrice] = useState(0);

  useEffect(
    () => axios
      .get('https://builder-69f8f-default-rtdb.firebaseio.com/defoult.json')
      .then(response => {
        setPrice(response.data.price);
        setColors(response.data.colors);
      }), []
  );


  function addColor(type) {
    const newColors = { ...colors };
    newColors[type]++;
    setPrice(price + prices[type])
    setColors(newColors);
  }

  function removeColor(type) {
    if (colors[type]) {
    const newColors = { ...colors };
    newColors[type]--;
    setPrice(price - prices[type])
    setColors(newColors);
  }
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