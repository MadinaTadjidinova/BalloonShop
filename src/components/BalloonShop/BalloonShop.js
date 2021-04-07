import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";

const BalloonShop = () => {
  const [colors, setColors] = useState([]);

  const [price, setPrice] = useState(25);
  const prices = {
    red: 5,
    green: 5,
    yellow: 5,
    blue: 5,
    pink: 5,
  };

  useEffect(() => {
    axios
      .get("https://builder-69f8f-default-rtdb.firebaseio.com/colors.json")
      .then((responce) => {
        const colors = responce.data;
        setColors(Object.values(colors));
      });
  }, []);

  function addColor(type) {
    const newColors = [...colors];
    newColors.push(type);
    setPrice(price + prices[type]);
    setColors(newColors);
  }

  function removeColor(type) {
    const newColors = [...colors];
    const index = newColors.lastIndexOf(type);
    if (index !== -1) {
      newColors.splice(index, 1);
    }
    setPrice(price - prices[type]);
    setColors(newColors);
  }

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview price={price} colors={colors} />
      <BalloonControls
        addColor={addColor}
        removeColor={removeColor}
      />
    </div>
  );
};

export default BalloonShop;
