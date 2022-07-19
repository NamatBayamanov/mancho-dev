import classes from "./Header.module.scss";
import manchoVideo from "../../assets/videos/manchodev.mp4";
// import ReactPlayer from "react-player";
function Header() {
  const styles = {
    // width: 100% + "%",
    // height: 100 + "vh",
  };
  return (
    <div className={classes.Header}>
      <div className={classes.background}>
        <div className={classes.black}></div>
        <div className={classes.video}>
          <video loop autoPlay muted>
            <source src={manchoVideo} />
          </video>

          {/*<ReactPlayer className={classes.play} style={styles} pip loop playing volume={0} muted url="https://youtu.be/bdJiSf0_xxg" /> */}
        </div>

        <div className="container">
          <div className={classes.content}>
            <div className={classes.width__text}>
              <h2>
                Наша миссия — <br />
                оптимизировать процессы, <br /> используя технологии,
                <br />
                во благо людей.
              </h2>
              <div className={classes.buttons}>
                <a className={classes.active__btn} href="/">
                  Присоединяйся в команду
                </a>

                <a className={classes.btn} href="/">
                  Наши продукты
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
