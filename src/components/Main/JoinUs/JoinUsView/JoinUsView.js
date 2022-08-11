import classes from "./JoinUsView.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { TiArrowSortedDown } from "react-icons/ti";

import Media from "react-media";
// import { TiEqualsOutline } from "react-icons/ti";


function JoinUsView({ children, text, link_1, link_2, effect, btns, scrolls }) {


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


  const Scroll = (event) => {
    window.scrollTo(0,780);
  }

  const Scrolls = (event) => {
    window.scrollTo(0,7255);
  }

  const Scroll3 = (event) => {
    window.scrollTo(0,10000);
  }
  const Scroll4 = (event) => {
    window.scrollTo(0,11400);
  }

  const Scroll5 = (event) => {
    window.scrollTo(0,11800);
  }

  const Scroll6 = (event) => {
    window.scrollTo(0,6250);
  }
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
                  {/* <Link style={btn} to="/join-us" onClick={Scroll3}>
                    {link_1}
                  </Link>; */}

                  <Media queries={{
                    small: "(min-width: 500px) and (max-width: 625px)",
                    medium: "(min-width: 625px) and (max-width: 900px)",
                    large: "(min-width: 901px) and (max-width: 904px)",
                    large2: "(min-width: 905px) and (max-width: 4000px)",
                  }}>

                  {matches => (
                    <Fragment>
                      {matches.small && <Link style={btn} to="/join-us" onClick={Scroll3}>
                    {link_1}
                  </Link>}
                  {matches.medium && <Link style={btn} to="/join-us" onClick={Scroll4}>
                    {link_1}
                  </Link>}
                  {matches.large && <Link style={btn} to="/join-us" onClick={Scroll5}>
                    {link_1}
                  </Link>}
                  {matches.large2 && <Link style={btn} to="/join-us" onClick={Scroll6}>
                    {link_1}
                  </Link>}
                    </Fragment>
                  )}

                  </Media>
                </div>
                <p> 
                  <Link style={effect} to="/join-us">{link_2}</Link>
                </p>
              </article>
              
            </div>

            <div className={classes.scroll__btn}>
                <span id={classes.scroll} onClick={Scroll}>
                  <span className={classes.react__icon}>
                    {btns}
                    
                  </span>
                </span>
                <span id={classes.span__scroll} onClick={Scrolls}>
                  <span className={classes.react__icon}>
                    {scrolls}
                  </span>
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsView;
