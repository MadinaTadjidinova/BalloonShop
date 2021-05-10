import classes from "./Order.module.css";

const Order = ({ name, phone, address, colors, price }) => {
  const outputColors = Object.keys(colors).map((color) => (
    <em>
      {color} - {colors[color]}
    </em>
  ));
  return (
    <div className={classes.Order}>
      <div>
        {name}, {phone}, {address}
      </div>
      <div>{outputColors}</div>
      <strong>{price}</strong>
    </div>
  );
};

export default Order;
