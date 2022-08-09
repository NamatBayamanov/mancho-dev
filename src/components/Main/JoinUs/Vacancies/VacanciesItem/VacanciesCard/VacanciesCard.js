import classes from "./VacanciesCard.module.scss";



function VacanciesCard({title, icons, children }) {
  return (
    <div className={classes.VacanciesCard}>
      <div className={classes.react_contain}>
        <span>
          {icons}
        </span>
      </div>

      <h3>{title}</h3>
      <p>
        {children}
      </p>
    </div>
  );
}

export default VacanciesCard;
