import React from "react";
import Artwork from "./Artwork";

const ImageList = ({ images }) => {
  /**
   * 
   * Zamenjaj Artwork s tem
   * 
   *  <img
          key={index}
          src={image.img}
          alt={image.title}
          style={{ width: "100%", margin: "0 20px 0 0" }}
        />
   * 
   */
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        height: "310px"
      }}
    >
      {images.map((image, index) => (
        <Artwork name={image.title} src={image.img} />
      ))}
    </div>
  );
};

export default ImageList;
