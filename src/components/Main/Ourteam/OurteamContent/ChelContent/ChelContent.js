import classes from "./ChelContent.module.scss";
function ChelContent({ image, vibe, name }) {
  return (
    <div className={classes.ChelContent}>
      <div className={classes.item__img}>
        <img alt="#" src={image} />
      </div>

      <h2>{name}</h2>
      <span>{vibe}</span>
    </div>
  );
}

export default ChelContent;
