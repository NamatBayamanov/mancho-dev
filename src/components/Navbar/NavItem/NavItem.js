import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

function NavItem({ url, children, bottom, toggle }) {
  return (
    <li className={`${classes.NavItem} ${bottom ? classes.bottom : "" }`}>
      <NavLink className={`${useMatch(url) ? classes.active : null }`} to={url} onClick={toggle} >{children}</NavLink>
    </li>
  );
}

export default NavItem;
