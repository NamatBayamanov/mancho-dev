import classes from "./OurteamContent.module.scss";

import ChelContent from "./ChelContent/ChelContent";

import chel_1 from "../../../../assets/main/photosteam/chel_1.webp";

import chel_2 from "../../../../assets/main/photosteam/chel_2.webp";

import chel_3 from "../../../../assets/main/photosteam/chel_3.webp";

import chel_4 from "../../../../assets/main/photosteam/chel_4.webp";

import chel_5 from "../../../../assets/main/photosteam/chel_5.webp";

import chel_6 from "../../../../assets/main/photosteam/chel_6.webp";
import chel_7 from "../../../../assets/main/photosteam/chel_7.webp";
import chel_8 from "../../../../assets/main/photosteam/chel_8.webp";
import chel_9 from "../../../../assets/main/photosteam/chel_9.webp";
import chel_10 from "../../../../assets/main/photosteam/chel_10.webp";
import chel_11 from "../../../../assets/main/photosteam/chel_11.webp";
import chel_12 from "../../../../assets/main/photosteam/chel_12.webp";
import chel_13 from "../../../../assets/main/photosteam/chel_13.webp";
import chel_14 from "../../../../assets/main/photosteam/chel_14.webp";

function OurteamContent() {
  return (
    <div className={classes.OurteamContent}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ChelContent
              image={chel_1}
              name="Эсен Сагынов"
              vibe="Founder, CEO"
            />
            <ChelContent
              image={chel_2}
              name="Арген Дарманов"
              vibe="Project Manager"
            />

            <ChelContent
              image={chel_3}
              name="Тынчтыкбек Байзаков"
              vibe="Project Manager"
            />

            <ChelContent
              image={chel_4}
              name="Улан Джакыпов"
              vibe="UI/UX and Graphic Designer"
            />

            <ChelContent
              image={chel_5}
              name="Руслан Болотов"
              vibe="UX/UI Designer"
            />

            <ChelContent
              image={chel_6}
              name="Ислам Исаев"
              vibe="Videographer"
            />

            <ChelContent
              image={chel_7}
              name="Улан Ишенкулов"
              vibe="Backend Engineer"
            />

            <ChelContent
              image={chel_8}
              name="Кубаныч Асанов"
              vibe="Flutter Mobile Engineer"
            />
            <ChelContent
              image={chel_9}
              name="Жуманазар Низамидинов"
              vibe="Frontend Engineer"
            />
            <ChelContent
              image={chel_10}
              name="Эльза Мамбетакунова"
              vibe="Frontend Engineer"
            />

            <ChelContent
              image={chel_11}
              name="Жанара Толонбаева"
              vibe="Frontend Engineer"
            />

            <ChelContent
              image={chel_12}
              name="Айжан Сагынова"
              vibe="PR Specialist and Content Manager"
            />

            <ChelContent
              image={chel_13}
              name="Данияр Алимбаев"
              vibe="Flutter Developer"
            />
            <ChelContent
              image={chel_14}
              name="Максатбек Болушов"
              vibe="Flutter | Backend Engineer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurteamContent;
