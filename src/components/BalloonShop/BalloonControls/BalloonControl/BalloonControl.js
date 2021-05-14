import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/action/shop";
import Button from "../../../UI/Button/Button";
import classes from "../BalloonControl/BalloonControl.module.css";

const BalloonControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const types = {
    red: {
      width: "50px",
      height: "50px",
      backgroundColor: "red",
      borderRadius: "50%",
      border: "3px solid red",
    },
    blue: {
      width: "50px",
      height: "50px",
      backgroundColor: "blue",
      borderRadius: "50%",
      border: '3px solid blue',
    },
    yellow: {
      width: "50px",
      height: "50px",
      backgroundColor: "yellow",
      borderRadius: "50%",
      border: "3px solid yellow",
    },
    pink: {
      width: "50px",
      height: "50px",
      backgroundColor: "#FE4CAF",
      borderRadius: "50%",
      border: "3px solid #FE4CA7",
    },
    green: {
      width: "50px",
      height: "50 px",
      backgroundColor: "green",
      borderRadius: "50%",
      border: "3px solid green",
    },
    purple: {
      width: "50px",
      height: "50px",
      backgroundColor: "purple",
      borderRadius: "50%",
      border: "3px solid purple",
    },
    
  };
  return (
    <div className={classes.BalloonControl} style={types[type]}>
      <Button onClick={() => dispatch(add(type))}>+</Button>

      <Button onClick={() => dispatch(remove(type))} disabled={!count}
      >  
        -
      </Button>
    </div>
  );
};

export default BalloonControl;
