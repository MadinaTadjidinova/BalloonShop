import BalloonPreview from "./BalloonPreview/BalloonPreview";
import BalloonControls from "./BalloonControls/BalloonControls";
import classes from "./BalloonShop.module.css";

const BalloonShop = () => {
  const colors = {
    red: 2,
    blue: 2,
    yellow: 2,
    green: 1,
  };

  return (
    <div className={classes.BalloonShop}>
      <BalloonPreview colors={colors}/>
      <BalloonControls />
    </div>
  );
}

export default BalloonShop;