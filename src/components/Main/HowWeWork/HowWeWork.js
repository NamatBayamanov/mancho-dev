import classes from "./HowWeWork.module.scss";
import { BsCheckCircle } from "react-icons/bs";


function HowWeWork() {
  return (
    <section className={classes.HowWeWork}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.item__title}>
            <div className={classes.width__title}>
              <h2>Как мы работаем?</h2>
              <p>
                Для достижения своих целей мы используем передовые технологии и
                методологии. В нашем арсенале:
              </p>
            </div>
          </div>

          <div className={classes.content}>
            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Design-Driven Development (DDD)
                </h2>
              </div>
              <p>
              Разработка на основе дизайна: мы не начинаем программировать пока не отшлифуем дизайн.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Amazon Web Services (AWS)
                </h2>
              </div>
              <p>
              Облачные Web сервисы Амазон (AWS): у нас нет серверов и нет системных администраторов.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Infrastructure as Code (IaC)
                </h2>
              </div>
              <p>
              Инфраструктура как код (IaC): все наши сервисы структурно поднимаются через код и тестируются, что позволяет нам с уверенностью делать изменения в системе.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                GraphQL
                </h2>
              </div>
              <p>
              Единый программный интерфейс на всех фронтах
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Continuous Integration (CI) and Continuous Delivery (CD)
                </h2>
              </div>
              <p>
              Многоступенчатая непрерывная интеграция и доставка кода в продакшн (Full CI/CD): нет человеческого вмешательства при выкатке нового функционала пользователям.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Тестирование на всех уровнях
                </h2>
              </div>
              <p>
              Тестирование на всех уровнях: юнит тесты, функциональные, интеграционные и canary тесты, поэтому мы уверены в надежности наших новых сервисов.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                TypeScript and Dart
                </h2>
              </div>
              <p>
              TypeScript and Dart
Только TypeScript (Web, backend, инфраструктура) и Dart (iOS, Android) на всех уровнях системы: более эффективный обмен знаниями и опытом.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Лучшие практики программирования
                </h2>
              </div>
              <p>
              Применяем рекомендации по созданию высоконагруженных и масштабируемых систем от Амазон и стандартные стили кодирования.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                Agile Management
                </h2>
              </div>
              <p>
              Гибкие методологии создания продукта Scrum: у нас штатный scrum-master и проектный менеджер.
              </p>
            </div>

            <div className={classes.item__text}>
              <div className={classes.with__mark}>
                <span>
                  <BsCheckCircle className={classes.tick}/>
                </span>
                <h2>
                MVP подход к работе
                </h2>
              </div>
              <p>
              Короткие и частые выкатки нового функционала, начиная с минимального жизнеспособного продукта (MVP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
