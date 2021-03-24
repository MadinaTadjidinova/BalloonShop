import classes from "./BalloonColors.module.css";

const BalloonColors = ({ type }) => {
  const types = {
    red: { backgroundColor: "red", width: "50px", height: "50px", borderRadius: "50px" },
    blue: { backgroundColor: "blue", width: "50px", height: "50px", borderRadius: "50px" },
    yellow: { backgroundColor: "yellow", width: "50px", height: "50px", borderRadius: "50px"},
    tomato: { backgroundColor: "tomato", width: "50px", height: "50px", borderRadius: "50px"},
    black: { backgroundColor: "black", width: "50px", height: "50px", borderRadius: "50px" },
    green: { backgroundColor: "green", width: "50px", height: "50px", borderRadius: "50px"},
  };


  

  

  return (
    <div className={classes.BalloonColors} style={types[type]}></div>
  );
}

export default BalloonColors;

