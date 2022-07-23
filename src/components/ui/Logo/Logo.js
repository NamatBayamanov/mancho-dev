import classes from "./Logo.module.scss";

import logoImage from "../../../assets/logo/mancho.webp";

function Logo() {
  return (
    <div className={classes.Logo}>
      <li className={classes.img__container}>
        <a href="/">
          <img src={logoImage} alt="#" />
        </a>
      </li>
    </div>
  );
}

export default Logo;
