import classes from "./Navbar.module.scss";

import Logo from "../ui/Logo/Logo";

import NavItem from "./NavItem/NavItem";


import MenuBurger from "./MenuBurger/MenuBurger";
function Navbar({ toggle }) {
  return (
    <div className={classes.Navbar}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              <Logo />
              <NavItem url="/">Главная</NavItem>
              <NavItem url="/blog">Блог</NavItem>
              <NavItem url="/hub">Hub</NavItem>
            </ul>
            
            <MenuBurger btn={toggle}/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
