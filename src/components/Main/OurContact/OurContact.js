import classes from "./OurContact.module.scss";

function OurContact() {
  return (
    <div className={classes.OurContact}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.map__title}>
              <h2>Наши контакты</h2>
              <p>
                +996 997 999 222 <br />
                hello@mancho.dev <br />
                Бизнес-центр "MONOLIT", 8 этаж
                <br />
                801 кабинет <br />
                ул. Льва Толстого 36к <br />
                г. Бишкек, Кыргызстан
              </p>
            </div>
            <div className={classes.map__title}>
              <div className={classes.backdrop}></div>
              <iframe
                title="Map of World"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA,%20%D0%9F%D1%83%D1%82%D0%B5%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0,%20%20%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%20Monolit,%20%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%A6%D0%B5%D0%BD%D1%82%D1%80+(%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%20Monolit)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                {/* <a href="https://www.maps.ie/distance-area-calculator.html">
          measure area map
        </a> */}
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurContact;
