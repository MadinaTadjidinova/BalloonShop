import classes from "./OrderSummary.module.css";

const OrderSummary = ({ colors, price }) => {
  const labels = {
    red: "Red",
    green: "Blue",
    yellow: "Yellow",
    blue: "Green",
    pink: "Pink",
    purple: "Purple",
  }
  const results = Object.keys(colors)
    .map(type => <li>{labels[type]}: {colors[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;