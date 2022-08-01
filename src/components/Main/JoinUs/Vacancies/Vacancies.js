import { useEffect, useState } from "react";
import Company from "../../Company/Company";
import JoinUsView from "../JoinUsView/JoinUsView";
import classes from "./Vacancies.module.scss";

import userImage from "../../../../assets/main/joinus/developer/essen_sagynov.webp";
import OurProducts from "../../OurProducts/OurProducts";
import ListProducts from "../../ListProducts/ListProducts";
import PhotosCompany from "../../PhotosCompany/PhotosCompany";
import MorePhotos from "../../MorePhotos/MorePhotos";
import HowWeWork from "../../HowWeWork/HowWeWork";
function Vacancies() {
  const [btn, setBtn] = useState({
    transform: `translate(${-10000 + "px"})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setBtn({
        transform: `translate(${-1 + "px"})`,
        transition: `transform ${2}s`,
      });
    }, 700);
  }, []);
  return (
    <div className={classes.Vacancies}>
      <JoinUsView effect={btn} link_1="Открытые вакансии " link_2="Подробнее">
        Присоединяйся к команде Mancho Devs
      </JoinUsView>
      <Company />

      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.img__container}>
              <img alt="#" src={userImage} />
            </div>
            <div className={classes.user}>
              <div className={classes.user__width}>
                <h2>Эсен Сагынов</h2>
                <p>Основатель и главный инженер Mancho Devs</p>
              </div>

              <article>
                <aside>
                  В Mancho
                  Devs работают <span>40 человек</span> одновременно над{" "}
                  <span>тремя разными продуктами</span> и это количество очень
                  быстро растёт!
                </aside>
                <aside>
                  Более того, <span className={classes.blue}>присоединившись к нам,</span> у
                  тебя будет возможность поработать бок о бок с Эсеном
                  Сагыновым, разносторонним программистом с Амазон, который
                  непосредственно участвует в разработке автомасштабирования
                  AWS.
                </aside>
              </article>
            </div>
          </div>
        </div>
      </div>
      <OurProducts/>
      <ListProducts/>
      <PhotosCompany/>
      <MorePhotos/>
      <HowWeWork/>
    </div>
  );
}

export default Vacancies;
