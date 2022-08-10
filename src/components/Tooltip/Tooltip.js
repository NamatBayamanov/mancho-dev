import Navbar from "../Navbar/Navbar";
import classes from "./Tooltip.module.scss";

function Tooltip({ action }) {
  return ( 
    <div className={classes.Tooltip}>
      <Navbar toggle={action}/>
    </div>
  );
}

export default Tooltip;