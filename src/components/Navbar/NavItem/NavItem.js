import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

function NavItem({ url, children }) {
  return (
    <li className={classes.NavItem}>
      <NavLink className={`${useMatch(url) ? classes.active : null }`} to={url}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
