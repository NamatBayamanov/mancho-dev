import classes from "./MorePhotos.module.scss";
function MorePhotos() {
  return ( 
    <div className={classes.MorePhotos}>
      <a href="https://www.flickr.com/photos/manchodevs/albums">
        Больше фотографий из жизни компании
      </a>
    </div>
  );
}

export default MorePhotos;