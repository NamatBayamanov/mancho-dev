import { useEffect, useState } from "react";
import classes from "./JoinUs.module.scss";

function JoinUs() {


  const [h2, setH2] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setH2({
        transform: `translate(${-1 + "px"})`,
        transition: `all ${2}s`,
    });
    }, 300);
  }, []);

  const [p, setP] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setP({
        transform: `translate(${-1 + "px"})`,
        transition: `all ${2}s`,
    });
    }, 500);
  }, []);

  const [btn, setBtn] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setBtn({
        transform: `translate(${-1 + "px"})`,
        transition: `all ${2}s`,
    });
    }, 700);
  }, []);


  return (
    <div className={classes.JoinUs}>
      <div className={classes.backdrop}></div>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.content__width}>
              <h2 style={h2} >Присоединяйся к команде Mancho Devs!</h2>
              <p style={p}>
                Мы всегда в поисках талантливых людей, готовых работать над
                сложными и интересными задачами вместе с нами
              </p>
              <div className={classes.btn}>
                <a style={btn} href="/">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
