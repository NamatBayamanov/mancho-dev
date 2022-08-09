import classes from "./Picture.module.scss";
function Picture() {
  return (
    <div className={classes.Picture}>
      <div className={classes.backdrop}></div>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.contain}>
              <h2>Присоединяйся к нам!</h2>
              <p>
                Если тебе интересно работать с нами, то отправляй своё резюме на
                нашу почту
              </p>
              <div className={classes.link}>
                <a href="mailto:hire@mancho.dev">hire@mancho.dev</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picture;
