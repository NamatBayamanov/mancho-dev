import classes from "./BlogItem.module.scss";
import { Link } from "react-router-dom";
function BlogItem({ inform }) {
  return (
    <div className={classes.BlogItem}>
      <Link to={"/blog/" + inform.productId}>
        <div className={classes.item}>
          <div className={classes.item__2}>
            <div className={classes.iframe__container}>
              <iframe
                // width="760"
                // height="427"

                src={inform.src}
                title={inform.title}
                frameBorder={inform.num}
                allow={inform.allow}
                allowFullScreen
              >
                Ваш браузер не поддерживает этот iFRAME тег. Пожалуйста
                обновитесь!
              </iframe>
            </div>

            <h2>
              {inform.name} <span>{inform.name2}</span>
            </h2>
            <p>{inform.text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
