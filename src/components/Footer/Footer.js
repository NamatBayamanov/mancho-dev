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
                <a href="/blog">Блог</a>
              </li>

              <li>
                <a href="/hub">Hub</a>
              </li>
            </ul>
            <ul className={classes.list_1}>
              <h2>СОЦСЕТИ</h2>
              <li>
                <a href="https://www.linkedin.com/company/manchodevs/">LinkedIn</a>
              </li>

              <li>
                <a href="https://www.instagram.com/ManchoDevs/">Instagram</a>
              </li>

              <li>
                <a href="https://www.youtube.com/ManchoDevs">YouTube</a>
              </li>

              <li>
                <a href="https://t.me/ManchoDevs">Telegram</a>
              </li>

              <li>
                <a href="https://twitter.com/ManchoDevs">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
