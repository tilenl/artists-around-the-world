import React, { useState } from "react";

const Artwork = ({ name, src }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: hovered ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s",
    borderRadius: "10px"
  };
  const imageStyle = {
    width: "300px",
    height: "300px",
    transition: "all 0.3s",
    objectFit: "cover",
    objectPosition: "center"
  };
  const textStyle = {
    color: "white",
    fontWeight: "normal",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "1rem",
    textShadow: "2px 2px #000"
  };

  return (
    <>
      {imageLoaded ? (
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            margin: "0px 20px 0px 0px"
          }} // set fixed width and height for container
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onError={() => setImageLoaded(false)}
        >
          <img style={imageStyle} src={src} alt={name} />
          <a
            style={overlayStyle}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={textStyle}>{name}</div>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Artwork;
