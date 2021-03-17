import Nav from "../../../Layout/Nav/Nav";
import classes from "./Toolbar.module.css";
const Toolbar = ({}) => {
    return (  
        <div className={classes.Toolbar}>
            <Logo />
            <Nav />
        </div>
    );
}
export default Toolbar;