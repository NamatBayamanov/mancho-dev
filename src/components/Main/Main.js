import Company from "./Company/Company";
import ListProducts from "./ListProducts/ListProducts";
import classes from "./Main.module.scss";
import MorePhotos from "./MorePhotos/MorePhotos";
import OurProducts from "./OurProducts/OurProducts";
import Ourteam from "./Ourteam/Ourteam";
import PhotosCompany from "./PhotosCompany/PhotosCompany";

function Main() {
  return (
    <div className={classes.Main}>
      <Company />

      <OurProducts />
      <ListProducts />
      <PhotosCompany />

      <MorePhotos />

      <Ourteam />
    </div>
  );
}

export default Main;
