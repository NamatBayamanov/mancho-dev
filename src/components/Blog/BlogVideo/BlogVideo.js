import classes from "./BlogVideo.module.scss";

import { Link } from "react-router-dom";

function BlogVideo({src, title, num, allow, name, text, name2, url}) {
  return (
    <div className={classes.BlogVideo}>
      <Link to={url}>
        <div className={classes.item}>
          <div className={classes.item__2}>
          <div className={classes.iframe__container}>
            <iframe
              // width="760"
              // height="427"
              src={src}
              title={title}
              frameBorder={num}
              allow={allow}
              allowFullScreen
            >
              Ваш браузер не поддерживает этот iFRAME тег. Пожалуйста
              обновитесь!
            </iframe>
          </div>

          <h2>{name} <span>{name2}</span></h2>
          <p>
            {text}
          </p>
          </div>
          
        </div>
      </Link>
    </div>
  );
}

export default BlogVideo;
