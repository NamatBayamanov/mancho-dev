import classes from "./PhotosCompany.module.scss";

import com1 from "../../../assets/main/photoscompany/mainc_1.webp";

import com2 from "../../../assets/main/photoscompany/mainc_2.webp";
import com3 from "../../../assets/main/photoscompany/mainc_3.webp";

import com4 from "../../../assets/main/photoscompany/mainc_4.webp";

import com5 from "../../../assets/main/photoscompany/mainc_5.webp";

import com6 from "../../../assets/main/photoscompany/mainc_6.webp";

function PhotosCompany() {
  return (
    <div className={classes.PhotosCompany}>
      <div className={classes.background}>
        <div className={classes.content}>
          <div className={classes.img__container}>
            <img alt="#" src={com1} />
          </div>

          <div className={classes.img__container}>
            <img alt="#" src={com2} />
          </div>

          <div className={classes.img__container}>
            <img alt="#" src={com3} />
          </div>

          <div className={classes.img__container}>
            <img alt="#" src={com4} />
          </div>

          <div className={classes.img__container}>
            <img alt="#" src={com5} />
          </div>

          <div className={classes.img__container}>
            <img alt="#" src={com6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosCompany;
