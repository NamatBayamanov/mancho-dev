import classes from "./BlogHeader.module.scss";

function BlogHeader({name}) {
  return ( 
    <div className={classes.BlogHeader}>
      <h2>
        {name}
      </h2>
    </div>
  );
}

export default BlogHeader;