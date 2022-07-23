import Logo from "../ui/Logo/Logo";
import classes from "./Footer.module.scss";
function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.logo__start}>
              <Logo />
              <div className={classes.after__logo}>
                © 2022 Mancho Devs (ОсОО «Прораб») <br /> Все права защищены.
              </div>
            </div>

            <ul className={classes.list_1}>
              <h2>РАЗДЕЛЫ</h2>
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
            <ul className={classes.list_1}>
              <h2>СОЦСЕТИ</h2>
              <li>
                <a href="/">LinkedIn</a>
              </li>

              <li>
                <a href="/">Instagram</a>
              </li>

              <li>
                <a href="/">YouTube</a>
              </li>

              <li>
                <a href="/">Telegram</a>
              </li>

              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
