import classes from "./Navbar.module.scss";


import Logo from "../ui/Logo/Logo";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              <Logo/>


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
