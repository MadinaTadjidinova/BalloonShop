import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import DrowerOpen from "../DrowerOpen/DrowerOpen";
import classes from "./Toolbar.module.css";
const Toolbar = () => {
    return (  
        <div className={classes.Toolbar}>
            <Logo />
            <Nav />
            <DrowerOpen />
        </div>
    );
}
export default Toolbar;