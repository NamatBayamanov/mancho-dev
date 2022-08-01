import classes from "./JoinUsView.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function JoinUsView({ children, text, link_1, link_2, effect }) {
  const [h2, setH2] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setH2({
        transform: `translate(${-1 + "px"})`,
        transition: `transform ${1.5}s`,
      });
    }, 200);
  }, []);

  const [p, setP] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setP({
        transform: `translate(${-1 + "px"})`,
        transition: `transform ${1.5}s`,
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
        transition: `transform ${1.5}s`,
      });
    }, 700);
  }, []);

  return (
    <div className={classes.JoinUsView}>
      <div className={classes.backdrop}></div>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.content__width}>
              <h2 style={h2}>{children}</h2>
              <p style={p}>{text}</p>
              <article className={classes.links}>
                <div className={classes.btn}>
                  <Link style={btn} to="/join-us">
                    {link_1}
                  </Link>
                </div>
                <p> 
                  <Link style={effect} to="/join-us">{link_2}</Link>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsView;