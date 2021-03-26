import BalloonControls from "../BalloonControls";
import classes from "./BalloonControl.module.css";

const BalloonControl = ({colors}) => {
    const result = [];
    for (const color in colors) {
        result.push(<BalloonControls />);
    }
    return ( 
        <div className = {classes.BalloonControls}>{result}</div>
     );
    }

 
export default BalloonControl;
