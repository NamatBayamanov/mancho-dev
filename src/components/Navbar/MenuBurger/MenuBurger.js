import classes from "./MenuBurger.module.scss";

import { TbMenu2 } from "react-icons/tb";

function MenuBurger({ btn }) {
  return (
    <div className={classes.MenuBurger}>
      <span onClick={btn}>
        <TbMenu2 className={classes.menu} />
      </span>
    </div>
  );
}

export default MenuBurger;
