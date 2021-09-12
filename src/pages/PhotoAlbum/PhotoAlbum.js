import React from "react";
import classes from "./PhotoAlbum.module.css";
import {
  showBackDrop,
  hiddenBackDrop,
} from "../../components/Backdrop/Backdrop";

const PhotoAlbum = () => {
  const [photoes, setPhotoes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      // loading state: the page will load for 3 seconds before displaying
      showBackDrop("Loading...");
      hiddenBackDrop();
      
      // fetch the first 24 photos from an API
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setPhotoes(data.slice(0, 24));
    };
    fetchData();
  }, []);

  const renderPhotoes = () => {
    return photoes.map((photo) => {
      return (
        <img
          src={photo.url}
          className={classes.photo}
          key={photo.albumId}
          alt={photo.title}
        />
      );
    });
  };
  return (
    <>
      <div className={classes.PhotoAlbum}>
        <h1>Photo Album</h1>
        <div className={classes.photoList}>{renderPhotoes()}</div>
      </div>
    </>
  )
};

export { PhotoAlbum };
