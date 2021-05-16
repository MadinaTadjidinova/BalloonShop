import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/action/shop";
import withAxios from "../withAxios";

const BalloonShop = ({ history }) => {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.shop.colors);
  const price = useSelector(state => state.shop.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push("/checkout");
  }

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview price={price} colors={colors} />
      <BalloonControls colors={colors} startOrdering={startOrdering} />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary colors={colors} price={price} />
        <Button onClick={finishOrdering} green="green">
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default withAxios(BalloonShop, axios);
