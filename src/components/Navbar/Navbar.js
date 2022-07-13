import classes from "./Navbar.module.scss";

import logoImage from "../../assets/logo/mancho.webp";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              <div className={classes.logo}>
                <li className={classes.img__container}>
                  <a href="/">
                    <img src={logoImage} alt="#" />
                  </a>
                </li>
              </div>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/">Блог</a>
              </li>
              <li>
                <a href="/">Hub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
