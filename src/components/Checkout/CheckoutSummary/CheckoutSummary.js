import classes from "./CheckoutSummary.module.css";
import BalloonPreview from "../../BalloonShop/BalloonPreview/BalloonPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BalloonPreview colors={{
          red: 5, 
          blue: 5,
          green: 5,
          pink: 5,
          purple: 5,
          yellow:5,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;