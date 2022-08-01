
import classes from "./JoinUs.module.scss";
import JoinUsView from "./JoinUsView/JoinUsView";

function JoinUs() {


  


  return (
    // <div className={classes.JoinUs}>
    //   <div className={classes.backdrop}></div>
    //   <div className={classes.background}>
    //     <div className="container">
    //       <div className={classes.content}>
    //         <div className={classes.content__width}>
    //           <h2 style={h2} >Присоединяйся к команде Mancho Devs!</h2>
    //           <p style={p}>
    //             Мы всегда в поисках талантливых людей, готовых работать над
    //             сложными и интересными задачами вместе с нами
    //           </p>
    //           <div className={classes.btn}>
    //             <Link style={btn} to="/join-us">ПодробнееПодробнее</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <JoinUsView text="Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами" link_1="Подробнее">
      Присоединяйся к команде Mancho Devs!
    </JoinUsView>
  );
}

export default JoinUs;
