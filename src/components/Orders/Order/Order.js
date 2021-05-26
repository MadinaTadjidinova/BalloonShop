import classes from "./Order.module.css";

const Order = ({ name, phone, address, colors, price }) => {
  const outputColors = Object.keys(colors).map(color => 
    <em key={color} className={classes.colors}>
      {color} - {colors[color]}
    </em>
  );
  // console.log(outputColors)

  
  return (
    <div className={classes.Order}>
      <div className={classes.info}>
        {name}, {phone}, {address}
      </div>
      <div>{outputColors}</div>
      <strong className={classes.price}>{price} som</strong>
    </div>
  );
};

export default Order;
