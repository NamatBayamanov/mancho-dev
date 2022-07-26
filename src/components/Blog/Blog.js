import classes from "./Blog.module.scss";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogItem from "./BlogItem/BlogItem";

function Blog({ informs }) {

  const informItems = informs.map(item => (
    // console.log(item),
    <BlogItem key={item.productId} inform={item} />
  ));



  return (
    <div className={classes.Blog}>
      <BlogHeader name="Место, где мы делимся знаниями" />
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>

            {informItems}


            {/* <BlogVideo
              url="/blog/mvp"
              src="https://www.youtube.com/embed/2mPSXP3oT5E"
              title="Как протестировать свою бизнес идею, продукт или функционал? Про MVP подход в работе"
              num="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              name="Как тестировать идеи и работать быстро?"
              name2="Как тестировать идеи и работать?"
              text="Поговорим об MVP подходе, который мы используем в процессе проработки продукта и добавления нового функционала."
            />
            <BlogVideo
              url="/blog/designdrivendev"
              src="https://www.youtube.com/embed/x1CkwfoC4Nc"
              title="Как протестировать свою бизнес идею, продукт или функционал? Про MVP подход в работе"
              num="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              name="Что такое Design-Driven Development или почему наш первый сотрудник дизайнер"
              text="В нашей работе мы используем принцип, который называется Design Driven Development. Что это такое?"
            />
            <BlogVideo
              url="/blog/agileart"
              src="https://www.youtube.com/embed/kI-s4Gix1eg"
              title="Как протестировать свою бизнес идею, продукт или функционал? Про MVP подход в работе"
              num="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              name="
              Работа над проектами по Agile"
              text="Работать над проектами хаотично, без четкой системы не очень эффективно. Тут к нам на помощь приходит Agile."
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
