import classes from "./VacanciesItem.module.scss";

import conditionsImage from "../../../../../assets/main/joinus/developer/working_conditions.webp";

import { AiOutlineGift } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";

import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";

import { TiStarOutline } from "react-icons/ti";

// AiOutlineClockCircle

import VacanciesCard from "./VacanciesCard/VacanciesCard";

// import oclockImage from "../../../../../assets/main/joinus/conditions/oclock.svg";
function VacanciesItem() {
  return (
    <div className={classes.VacanciesItem}>
      <div className={classes.background}>
        <div className={classes.contain}>
          <div className={classes.content2}>
            <div className={classes.conditions}>
              <aside>
                <h2>Условия работы</h2>
                <p>
                  Мы ценим труд каждого и стремимся создавать всё лучшие рабочие
                  условия
                </p>
              </aside>

              <div className={classes.list_conditions}>
                <VacanciesCard
                  title="Компенсация участия в конференциях"
                  icons={<AiOutlineGift />}
                >
                  Помимо того, что ты будешь работать в потрясающей команде без
                  токсичной атмосферы и культуры (что очень важно), мы готовы
                  вкладывать в твоё образование путём компенсации участия в
                  конференциях.
                </VacanciesCard>
                <VacanciesCard
                  title="Гибкий график работы"
                  icons={<AiOutlineClockCircle />}
                >
                  Обеспечение здорового баланса между личной и профессиональной
                  жизнью имеет решающее значение для счастья и успеха на работе.
                  Поэтому мы рады предложить гибкий график, чтобы ты смог вести
                  более продуктивную и сбалансированную жизнь.
                </VacanciesCard>
                <VacanciesCard title="Нет бюрократии" icons={<TiStarOutline />}>
                  Мы работаем очень быстро. Никакой бюрократии и максимально
                  адекватное руководство с прозрачным процессом принятия
                  решений.
                </VacanciesCard>
                <VacanciesCard
                  title="Комфортный офис"
                  icons={<AiOutlineWifi />}
                >
                  У нас достаточно просторный офис в 5 микрорайоне города Бишкек
                  со всеми условиями для комфортной работы и постоянной
                  поддержкой в виде снэков, напитков, фруктов и перекусов.
                </VacanciesCard>
              </div>
            </div>
            <div className={classes.img__container2}>
              <img alt="#" src={conditionsImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacanciesItem;
