import classes from "./Company.module.scss";
function Company() {
  return (
    <div className={classes.Company}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.span}>
              <span>О КОМПАНИИ</span>
            </div>

            <div className={classes.content__body}>
              <div className={classes.content__item}>
                <strong> Mancho Devs</strong> (ОсОО «Прораб») - это стартап,
                основанный в Бишкеке в феврале 2021 года{" "}
                <a href="https://www.linkedin.com/in/esensagynov/">Эсеном Сагыновым,</a> разработчиком одной из
                крупнейших компаний в мире - Amazon. Мы используем только
                последние технологии и инструменты для создания собственных IT
                продуктов с целью оптимизации процессов в различных сферах жизни
                людей.
              </div>
              <div className={classes.content__item2}>
                За год существования мы уже смогли выйти на рынок и начали
                работать с первыми клиентами. В Mancho Devs работают 40 человек
                одновременно над тремя разными продуктами и это количество очень
                быстро растёт! Мы не разрабатываем ни для кого, мы создаём свои
                продукты, которые выводим на рынок. У нас нет заказчиков, у нас
                только наши клиенты и пользователи. Если ты хочешь стать частью
                нашего движения и сделать вклад в улучшение жизни жителей нашей
                страны, присоединяйся к нам!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
