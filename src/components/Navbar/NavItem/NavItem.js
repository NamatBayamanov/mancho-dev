import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

function NavItem({ url, children, bottom }) {
  return (
    <li className={`${classes.NavItem} ${bottom ? classes.bottom : "" }`}>
      <NavLink className={`${useMatch(url) ? classes.active : null }`} to={url}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
