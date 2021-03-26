import BalloonColors from "../../BalloonColors/BalloonColors";
import classes from "../BalloonControl/BalloonControl.module.css";

const BalloonControl = ({type, addColor, removeColor }) => {
    return (
    <div className={classes.BalloonControl}>
        <button onClick={() => addColor(type)}>+</button>
        <BalloonColors type={type} />
        <button onClick={() => removeColor(type)}>-</button>
    </div> 
    );
}
 
export default BalloonControl;  

