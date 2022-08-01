import { useEffect, useState } from "react";
import classes from "./BlogHeader.module.scss";

function BlogHeader({name}) {

  const [h2, setH2] = useState({
    opacity: "0",
  });

  useEffect(() => {
    setH2({
      opacity: "9",
      transition: `opacity ${2}s`,
    });
  }, []);
  return ( 
    <div className={classes.BlogHeader}>
      <h2 style={h2}> 
        {name}
      </h2>
    </div>
  );
}

export default BlogHeader;