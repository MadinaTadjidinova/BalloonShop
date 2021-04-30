import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";


const BalloonShop = () => {
  const prices = {
    red: 5,
    green: 5,
    yellow: 5,
    blue: 5,
    pink: 5,
    purple: 5,
  };

  const [colors, setColors] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState();


  
  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder-69f8f-default-rtdb.firebaseio.com/defoult.json')
      .then(response => {
        setPrice(response.data.price);
        setColors(response.data.colors);
      });
  }
  function addColor(type) {
    const newColors = { ...colors };
    newColors[type]++;
    setPrice(price + prices[type]);
    setColors(newColors);
  }

  function removeColor(type) {
    if (colors[type]) {
      const newColors = { ...colors };
      newColors[type]--;
      setPrice(price - prices[type]);
      setColors(newColors);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-69f8f-default-rtdb.firebaseio.com/defoult.json', {
        colors: colors,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
      });
  }
  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview 
        price={price} 
        colors={colors} 
      />
      <BalloonControls

        colors={colors}
        addColor={addColor}
        removeColor={removeColor}
        startOrdering={startOrdering}
      />
      <Modal 
        show={ordering} 
        cancel={stopOrdering}>
        <OrderSummary
        colors={colors}
        price={price}
        />
         <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>

    </div>
  );
};

export default BalloonShop;
