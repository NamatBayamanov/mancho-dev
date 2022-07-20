import classes from "./ListProducts.module.scss";

function ListProducts() {
  return (
    <div className={classes.ListProducts}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.item__1}>
              <button>
                <span>1</span>
              </button>
              <div className={classes.item__grid}>
                <p>
                  <strong>
                    Averspay — <br />{" "}
                  </strong>
                  это первая открытая платежная система в стране.
                </p>
                <p>
                  <mark>Averspay</mark> предоставляет населению и разработчикам
                  возможность моментальной оплаты товаров или услуг как онлайн,
                  так и оффлайн.
                </p>
                <p>
                  У нас ноль сом комиссии на все услуги - мобильная связь,
                  интернет, коммунальные услуги, пополнение банковских карт, и
                  многое другое.
                </p>
              </div>
            </div>
            <div className={classes.item__1}>
              <button>
                <span>2</span>
              </button>
              <div className={classes.item__grid}>
                <p>
                  <strong>
                    Medcheck — <br />
                  </strong>
                  это мобильное приложение для оптимизации процессов в сфере
                  медицины.
                </p>
                <p>
                  В <mark>Medcheck.kg</mark> мы публикуем актуальный и
                  качественный контент как в видео, так и в текстовом форматах
                  от лучших специалистов в сфере медицины.
                </p>
                <p>
                  Мы помогаем людям найти нужного врача, клинику и работаем над
                  тем, чтобы сократить дистанцию между врачами и пациентами.
                </p>
              </div>
            </div>

            <div className={classes.item__1}>
              <button>
                <span>3</span>
              </button>

              <div className={classes.item__grid}>
                <p>
                  <strong>
                    Depo — <br />
                  </strong>
                  это решение для оптимизации процессов в коммерческой сфере.
                </p>
                <p>
                  <mark>Depo</mark> убирает барьеры, ускоряет и упрощает работу
                  между поставщиками/производителями товаров и продуктов и
                  владельцами магазинов и точек розничной торговли, предоставляя
                  мобильное и веб приложения для работы с товарами, подписками и
                  отчётностью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
