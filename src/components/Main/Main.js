import Header from "../Header/Header";
import Company from "./Company/Company";
import HowWeWork from "./HowWeWork/HowWeWork";
import JoinUs from "./JoinUs/JoinUs";
import ListProducts from "./ListProducts/ListProducts";
import classes from "./Main.module.scss";
import MorePhotos from "./MorePhotos/MorePhotos";
import OurContact from "./OurContact/OurContact";
import OurProducts from "./OurProducts/OurProducts";
import Ourteam from "./Ourteam/Ourteam";
import OurteamContent from "./Ourteam/OurteamContent/OurteamContent";
import PhotosCompany from "./PhotosCompany/PhotosCompany";

function Main() {
  return (
    <div className={classes.Main}>
      <Header/>
      <Company />

      <OurProducts />
      <ListProducts />
      <PhotosCompany />

      <MorePhotos />

      <Ourteam />
      <OurteamContent/>
      <HowWeWork/>
      <JoinUs/>
      <OurContact/>
    </div>
  );
}

export default Main;
