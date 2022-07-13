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
                  <img src={logoImage}  alt="#"/>
                </li>
              </div>
              <li>
                Главная
              </li>
              <li>
                Блог
              </li>
              <li>
                Hub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
