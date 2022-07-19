import Company from "./Company/Company";
import ListProducts from "./ListProducts/ListProducts";
import classes from "./Main.module.scss";
import OurProducts from "./OurProducts/OurProducts";

function Main() {
  return ( 
    <div className={classes.Main}>
    
    <Company />

    <OurProducts />
    <ListProducts/>
    </div>
  );
}

export default Main;