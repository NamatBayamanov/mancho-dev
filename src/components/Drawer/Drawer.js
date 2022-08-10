import NavItem from "../Navbar/NavItem/NavItem";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.scss";
function Drawer({ state, action }) {
  return (
    <div className={classes.Drawer}>
      <div className={`${classes.backdrop} ${state ? classes.close : "" }`} onClick={action}></div>
      <div className={classes.background}>
        <div className={`${classes.content} ${state ? classes.close : "" }`}>
          <ul className={classes.list}>
            <article>
            <Logo toggle={action} />
            </article>
            

            <NavItem url="/" toggle={action}>Главная</NavItem>
            <NavItem url="/blog" toggle={action}>Блог</NavItem>
            <NavItem url="/hub" toggle={action}>Hub</NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
