import BalloonColors from "../BalloonColors/BalloonColors"
import classes from "./BalloonPreview.module.css"

const BalloonPreview = ({colors}) => {
    const result = [];

    for (const color in colors) {
        for (let i = 0; i < colors[color]; i++) {
            result.push(<BalloonColors type={color} />)
        }
    }

    return(
        <div className={classes.BalloonPreview}>
            {result}
        </div>
    )
}

export default BalloonPreview;


