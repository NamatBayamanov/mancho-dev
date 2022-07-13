import classes from "./Header.module.scss";
import ReactPlayer from "react-player";
function Header() {
  const styles = {
    width: 100 + "%",
    height: 100 + "vh",
  };
  return (
    <div className={classes.Header}>
      <div className={classes.background}>
        <div className={classes.video}>
            {/* <iframe width="1536" height="722" src="https://www.youtube.com/embed/bdJiSf0_xxg?list=TLGGSMMKQzg3jvAxMzA3MjAyMg" title="Mancho Devs - Team Work Makes the Dream Work" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Ваш браузер не поддерживает элементы IFRAME пожалуйста обновитесь!</iframe> */}
              {/* <iframe   frameBorder="0"  allow="fullscreen" src="https://www.youtube.com/embed/bdJiSf0_xxg?autoplay=1&loop=1&enablejsapi=1&&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin=https://mancho.dev&playlist=bdJiSf0_xxg&mute=1">Ваш браузер не поддерживает элементы IFRAME пожалуйста обновитесь!</iframe> */}
          
            <ReactPlayer className={classes.play} style={styles} pip loop playing volume={0} muted url="https://youtu.be/bdJiSf0_xxg" />
        </div>

        <div className="container">
          <div className={classes.content}>
            <h2>
              Наша миссия — оптимизировать процессы, используя технологии,
              <br/>
                во
              благо людей.
            </h2>
            <div className={classes.buttons}>
              <button className={classes.active__btn}>
                <a href="/">
                Присоединяйся в команду
                </a>
              </button>
              <button>
                <a href="/">
                Наши продукты
                </a>
            
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Header;
