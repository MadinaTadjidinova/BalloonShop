import classes from "./CheckoutSummary.module.css";
import BalloonPreview from "../../BalloonShop/BalloonPreview/BalloonPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BalloonPreview colors={{
          red: 1, 
          blue: 1,
          green: 1,
          pink: 1,
          purple: 1,
          yellow:1,
        }} price={30} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;