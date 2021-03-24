import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonBuilder.module.css";

const BalloonBuilder = () => {
  const colors = {
    red: 20,
    blue: 20,
    yellow: 20,
    tomato: 20,
    black: 20,
    green: 15,
  };

  return (
    <div className={classes.BalloonBuilder}>
      <BalloonPreview />
      <BalloonControls />
    </div>
  );
}

export default BalloonBuilder;