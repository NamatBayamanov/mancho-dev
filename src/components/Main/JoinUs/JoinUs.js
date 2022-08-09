
import classes from "./JoinUs.module.scss";
import JoinUsView from "./JoinUsView/JoinUsView";

import { TiArrowSortedDown } from "react-icons/ti";

function JoinUs() {


  


  return (
    <JoinUsView scrolls={<TiArrowSortedDown/>} text="Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами" link_1="Подробнее">
      Присоединяйся к команде <span>Mancho Devs!</span>
    </JoinUsView>
  );
}

export default JoinUs;
