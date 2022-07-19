import classes from "./OurProducts.module.scss";
function OurProducts() {
  return ( 
    <div className={classes.OurProducts}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <h2>
              Наши продукты
            </h2>
            <p>
            <strong>Наша миссия</strong> — оптимизировать процессы, используя технологии, во благо людей. И наши продукты, конечно же, напрямую связаны с нашей миссией.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;