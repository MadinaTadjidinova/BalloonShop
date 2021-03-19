import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./Drawer.module.css";

const Drawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const drawerClassed = [
        classes.content,
        drawerOpen ? classes.open : classes.close
    ];

   

  return (
    <div className={classes.Drawer}>
      <Backdrop show={drawerOpen}/>
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
 
export default Drawer;