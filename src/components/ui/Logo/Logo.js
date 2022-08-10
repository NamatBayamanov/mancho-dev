import classes from "./Logo.module.scss";

import logoImage from "../../../assets/logo/mancho.webp";
import { Link } from "react-router-dom";

function Logo({ toggle }) {
  return (
    <div className={classes.Logo} onClick={toggle}>
      <li className={classes.img__container}>
        <Link to="/">
          <img src={logoImage} alt="#" />
        </Link>
      </li>
    </div>
  );
}

export default Logo;
