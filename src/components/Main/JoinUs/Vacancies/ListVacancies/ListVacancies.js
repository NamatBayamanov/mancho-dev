import classes from "./ListVacancies.module.scss";
function ListVacancies() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  const Toggle2 = () => {
    setShow2(!show2);
  };
  const Toggle3 = () => {
    setShow3(!show3);
  };
  const Toggle4 = () => {
    setShow4(!show4);
  };
  const Toggle5 = () => {
    setShow5(!show5);
  };
  const Toggle6 = () => {
    setShow6(!show6);
  };



  return (
    <div className={classes.ListVacancies}>
      <div className={classes.background}>
        <div className={classes.container}>
          <div className={classes.content}>
            <ul className={`${classes.list} ${show6 ? classes.show : ""}`}>
              <li
                className={`${classes.contain} ${
                  show ? `${classes.show}` : null
                }`}
              >
                <li className={classes.title} onClick={Toggle}>
                  <span>Middle/Senior Frontend Engineer</span>
                  <div className={classes.btn}>
                    <button className={show ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show ? classes.show : ""}`}>
                  <span>от $1,500 в месяц</span>
                  <h2>Предпочтительные квалификации и требования:</h2>
                  <li className={classes.li}>
                    3+ года профессионального опыта в Web разработке
                  </li>
                  <li className={classes.li}>
                    Full-Time (полная занятость, полный рабочий день)
                  </li>

                  <li className={classes.li}>
                    Хорошее понимание процессов, методологий проектирования и
                    разработки Web приложений
                  </li>

                  <li className={classes.li}>
                    Сильные функциональные знания или практический опыт работы с
                    веб-службами (REST или GraphQL)
                  </li>

                  <li className={classes.li}>
                    Навыки отладки и тестирования кода, а также навыки
                    устранения неполадок
                  </li>

                  <li className={classes.li}>Отличное знание HTML5/CSS3</li>

                  <li className={classes.li}>Глубокое понимание JavaScript</li>

                  <li className={classes.li}>
                    Знание современных ревизий JS (ES2015/ES2016)
                  </li>

                  <li className={classes.li}>
                    Отличное знание frontend библиотек (React)
                  </li>

                  <li className={classes.li}>
                    Знание CSS препроцессоров (SASS)
                  </li>

                  <li className={classes.li}>
                    Адаптивная верстка, верстка под мобильные устройства
                  </li>

                  <li className={classes.li}>
                    Понимание проблем разных браузеров
                  </li>

                  <li className={classes.li}>
                    Знания по обеспечению безопасности в Web
                  </li>

                  <li className={classes.li}>
                    Навыки обращения с системами сборки (Webpack)
                  </li>

                  <li className={classes.li}>
                    Навыки работы со статичными генераторами сайтов (Gatsby)
                  </li>

                  <li className={classes.li}>
                    Успешное прохождение тестового задания
                  </li>

                  <li className={classes.li}>
                    Знание технологий: React, Redux, JavaScript, Typescript,
                    Webpack, HTML, CSS/SASS SCSS, CSS-modules, CSS-modules,
                    Responsive Web Development, GraphQL, Unit Testing (Jest),
                    React Testing (Enzyme), BDD/TDD, интеграционные тесты
                    (Puppeteer).
                  </li>

                  <li className={classes.li}>
                    Знания Computer Science (алгоритмы, структуры данных).
                  </li>
                  <li className={classes.li}>Желание постоянно обучаться.</li>

                  <li className={classes.li}>
                    Желание обучать и развивать навыки junior разработчиков в
                    команде.
                  </li>

                  <li className={classes.li}>
                    Умение проверять и разбирать код сокомандников.
                  </li>
                </ul>
              </li>

              <li
                className={`${classes.contain2} ${
                  show2 ? `${classes.show}` : ""
                }`}
              >
                <li className={classes.title} onClick={Toggle2}>
                  <span>Middle/Senior Flutter Engineer</span>
                  <div className={classes.btn}>
                    <button className={show2 ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show2 ? classes.show : ""}`}>
                  <span>от $1,500 в месяц</span>
                  <h2>Предпочтительные квалификации и требования:</h2>
                  <li className={classes.li}>
                    Опыт работы с iOS/Swift или Android/Java/Kotlin;
                  </li>
                  <li className={classes.li}>
                    Опыт программирования приложений, поддерживаемых сервисами
                    AWS;
                  </li>

                  <li className={classes.li}>
                    Знание профессиональных практик разработки мобильных или Web
                    приложений и лучших практик для полного жизненного цикла
                    разработки программного обеспечения, включая стандарты
                    кодирования, обзоры кода, управление исходным кодом,
                    процессы сборки, тестирование и выкатки;
                  </li>

                  <li className={classes.li}>
                    Навыки работы в спринте, включая оценку и выполнение задач в
                    соответствии с установленными графиками;
                  </li>

                  <li className={classes.li}>
                    Степень бакалавра компьютерных наук, компьютерной инженерии
                    или смежных технических дисциплин;
                  </li>
                  <li className={classes.li}>
                    Основы информатики в структурах данных, разработке
                    алгоритмов, решении проблем, анализе сложности,
                    объектно-ориентированном проектировании и шаблонах
                    проектирования.
                  </li>
                </ul>
              </li>

              <li
                className={`${classes.contain3} ${
                  show3 ? `${classes.show}` : ""
                }`}
              >
                <li className={classes.title} onClick={Toggle3}>
                  <span>Node.js Backend Engineer</span>
                  <div className={classes.btn}>
                    <button className={show3 ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show3 ? classes.show : ""}`}>
                  <li className={classes.li}>
                    Глубокое понимание JavaScript/TypeScript.
                  </li>
                  <li className={classes.li}>
                    Глубокое понимание асинхронности языка (eventloop, etc.).
                  </li>

                  <li className={classes.li}>
                    Глубокое понимание потоков в Node.js.
                  </li>

                  <li className={classes.li}>
                    Четкое понимание REST API и HTTP статусов.
                  </li>

                  <li className={classes.li}>
                    Опыт создания безопасного RESTful сервиса.
                  </li>
                  <li className={classes.li}>
                    Умение отправлять метрики и логи.
                  </li>

                  <li className={classes.li}>
                    Умение писать полноценные тесты (unit, интеграционные и
                    т.д.)
                  </li>

                  <li className={classes.li}>
                    Опыт работы с сервисами AWS - плюс.
                  </li>

                  <li className={classes.li}>
                    Опыт разработки SDK и клиентов - большой плюс.
                  </li>
                  <li className={classes.li}>
                    Опыт разработки NPM пакетов. - Четкое понимание
                    семантических версий.
                  </li>
                </ul>
              </li>

              <li
                className={`${classes.contain4} ${
                  show4 ? `${classes.show}` : null
                }`}
              >
                <li className={classes.title} onClick={Toggle4}>
                  <span>SMM-менеджер</span>
                  <div className={classes.btn}>
                    <button className={show4 ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show4 ? classes.show : ""}`}>
                  <span>от $300 в месяц</span>
                  <h2>Предпочтительные квалификации и требования:</h2>
                  <li className={classes.li}>
                    Мы ищем медиа менеджера в нашу команду, который будет
                    развивать наши соцсети и блог, который мы ведём. Мы активно
                    ведем Instagram, LinkedIn, TikTok, Twitter странички, а
                    также YouTube и Telegram каналы. Там мы делимся нашей жизнью
                    в офисе и вне него, а так же опытом в разработке айти
                    продуктов.
                  </li>
                  <li className={classes.li}>
                    Работа будет вестись в команде с видеографом и фотографом.
                    От кандидата мы ожидаем просто возможность писать неплохие
                    тексты, остальному, при необходимости, обучим сами. Большим
                    плюсом будет креативность, чтобы предлагать новые форматы и
                    улучшать существующие.
                  </li>

                  <li className={classes.li}>
                    Рабочий день - полный, оффлайн.
                  </li>

                  <li className={classes.li}>
                    Если нет опыта работы в подобной сфере - нестрашно,
                    подавайтесь и мы обязательно рассмотрим вашу кандидатуру.
                  </li>
                </ul>
              </li>

              <li
                className={`${classes.contain5} ${
                  show5 ? `${classes.show}` : ""
                }`}
              >
                <li className={classes.title} onClick={Toggle5}>
                  <span>Офис-менеджер</span>
                  <div className={classes.btn}>
                    <button className={show5 ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show5 ? classes.show : ""}`}>
                  <h2>Обязанности:</h2>
                  <li className={classes.li}>
                    1. Управление
                    <ol className={show5 ? classes.show : ""}>
                      <li>
                        организация работы с персоналом офиса (администраторами,
                        секретарями, уборщицами, водителями, курьерами);
                      </li>
                      <li>организация совещаний и встреч;</li>
                    </ol>
                  </li>

                  <li className={classes.li}>
                    2. Администрирование
                    <ol className={show5 ? classes.show : ""}>
                      <li>распределение документации по отделам;</li>
                      <li>
                        организация приёма и рассылки деловой корреспонденции.
                      </li>

                      <li>частичный развоз документов.</li>
                    </ol>
                  </li>

                  <li className={classes.li}>
                    3. Хозяйственное обеспечение
                    <ol className={show5 ? classes.show : ""}>
                      <li>
                        организацию закупки материалов и техники, расходных
                        материалов
                      </li>
                    </ol>
                  </li>
                  <li className={classes.li}>
                    4. Контролирование
                    <ol className={show5 ? classes.show : ""}>
                      <li>
                        контроль состояния :офисного оборудования и средств
                        коммуникации.
                      </li>
                    </ol>
                  </li>
                  <li className={classes.li}>
                    5. Отчётность
                    <ol className={show5 ? classes.show : ""}>
                      <li>ведение отчетности по выполняемой работе</li>
                    </ol>
                  </li>

                  <h2>Требования:</h2>
                  <li className={classes.li}>
                    <ol className={show5 ? classes.show : ""}>
                      <li>
                        Опыт работы в аналогичной должности с аналогичными
                        обязанностями не менее одного года.
                      </li>
                      <li>
                        Личные качества: гибкость, честность, ответственность,
                        стрессоустойчивость, мобильность, коммуникабельность,
                        отзывчивость, инициативность
                      </li>
                      <li>
                        Уверенный пользователь компьютерных программ MS Office
                        (excel, word, e-mail)
                      </li>
                    </ol>
                  </li>

                  <h2>Условия:</h2>
                  <li className={classes.li}>
                    <ol className={show5 ? classes.show : ""}>
                      <li className={classes.disc}>
                        График работы: 5/2 с 09:00 до 18:00
                      </li>
                      <li className={classes.disc}>Карьерный рост</li>
                      <li className={classes.disc}>
                        Оформление согласно ТК КР
                      </li>
                      <li className={classes.disc}>
                        Ежегодный оплачиваемый трудовой отпуск
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>

              <li
                className={`${classes.contain6} ${
                  show6? `${classes.show}` : ""
                }`}
              >
                <li className={classes.title} onClick={Toggle6}>
                  <span>Оператор колл-центра</span>
                  <div className={classes.btn}>
                    <button className={show6 ? classes.show : ""}>+</button>
                  </div>
                </li>

                <ul className={`${show6 ? classes.show : ""}`}>
                  <h2>Обязанности:</h2>
                  <li className={classes.li}>
                    <ol className={show6 ? classes.show : ""}>
                      <li>Консультирование по телефону абонентов;</li>
                      <li>Мониторинг состояния аппаратов;</li>
                      <li>Выполнять поручения руководителя колл центра;</li>
                      <li>Ежедневные отчеты;</li>
                      <li>Обработка онлайн поддержки;</li>
                    </ol>
                  </li>

                  <h2>Требования:</h2>
                  <li className={classes.li}>
                    <ol className={show6 ? classes.show : ""}>
                      <li>
                        Опыт работы в аналогичной должности приветствуется;
                      </li>
                      <li>
                        Средне-специальное или высшее\не законченное высшее
                        образование;
                      </li>
                      <li>
                        Ответственность, аккуратность, внимательность, гибкость,
                        мобильность;
                      </li>
                      <li>
                        Грамотная речь на Русском и Кыргызском
                        языках(Обязательный пункт!!!);
                      </li>
                      <li>
                        Уверенный пользователь ПК (Internet, Excel, эл. почта).
                      </li>
                      <li>СТРЕССОУСТОЙЧИВОСТЬ</li>
                    </ol>
                  </li>

                  <h2>Условия:</h2>
                  <li className={classes.li}>
                    <ol className={show6 ? classes.show : ""}>
                      <li className={classes.disc}>
                        Заработная плата по итогам собеседования
                      </li>
                      <li className={classes.disc}>Сменный график работы</li>
                      <li className={classes.disc}>5/2 (плавающие выходные)</li>
                      <li className={classes.disc}>
                        Работа в дружном, веселом и молодом коллективе
                      </li>
                      <li className={classes.disc}>Карьерный рост</li>
                      <li className={classes.disc}>
                        Оформление согласно ТК КР
                      </li>
                      <li className={classes.disc}>Оплачиваемый отпуск</li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListVacancies;
