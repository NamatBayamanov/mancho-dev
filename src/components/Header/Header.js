import classes from "./Header.module.scss";
import manchoVideo from "../../assets/videos/manchodev.mp4";
import { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
function Header() {
  
  const [h2, setH2] = useState({
    // visibility: "hidden",
    opacity: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setH2({opacity: `${9}`, transition: `opacity ${.5}s`, });
    }, 600);
  }, []);

  const [activeBtn, setActiveBtn] = useState({
    opacity: 0,

  });

  useEffect(() => {
    setTimeout(() => {
      setActiveBtn({opacity: `${9}`, transition: `opacity ${1}s`,});
    }, 800);
  }, []);


  const [btn, setBtn] = useState({
    opacity: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setBtn({opacity: `${9}`, transition: `opacity ${1.5}s`,});
    }, 1150);
  }, []);


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
              <h2 style={h2}>
                Наша миссия — <br />
                оптимизировать процессы, <br /> используя технологии,
                <br />
                во благо людей.
              </h2>
              <div className={classes.buttons}>
                <a style={activeBtn} className={classes.active__btn} href="/">
                  Присоединяйся в команду
                </a>

                <a style={btn} className={classes.btn} href="/">
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
