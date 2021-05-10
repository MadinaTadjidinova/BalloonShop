import BalloonPreview from "../BalloonShop/BalloonPreview/BalloonPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const colors = useSelector((state) => state.shop.colors);
  const price = useSelector((state) => state.shop.price);

  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post("https://builder-69f8f-default-rtdb.firebaseio.com/orders.json", {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        colors: colors,
        price: price,
      })
      .then(response => {
        history.replace("/");
      });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <BalloonPreview colors={colors} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default withAxios(Checkout, axios);
