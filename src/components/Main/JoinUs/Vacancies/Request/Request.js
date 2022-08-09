import classes from "./Request.module.scss";
function Request() {
  return (
    <div className={classes.Request}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.contain__request}>
              <a href="mailto:hire@mancho.dev">Отправить заявку</a>
            </div>
            <div className={classes.text}>
              <p>
                Нет подходящей вакансии? Прояви инициативу и отправляй резюме
                нам на почту:<br/>
                <a href="mailto:hire@mancho.dev">hire@mancho.dev</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
