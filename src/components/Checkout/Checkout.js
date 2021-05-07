import BalloonPreview from "../BalloonShop/BalloonPreview/BalloonPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-69f8f-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      colors: {
        red: 1,
        green: 1,
        yellow: 1,
        blue: 1,
        pink: 1,
        purple: 1,
        ownColor: 1,
      },
      price: 35,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
     <BalloonPreview colors={{
          red: 1, 
          blue: 1,
          green: 1,
          pink: 1,
          purple: 1,
          yellow:1,
          ownColor:1,
        }} price={35} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;