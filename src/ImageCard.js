import { React, useEffect, useState } from "react";
import "./ImageCard.css"; // Import CSS file for styling
import ImageList from "./ImageList";

/* PUBLIC DOCUMENTATION:
 * https://docs.google.com/document/d/1Vxi5lQnMCA21dvNm_7JVd6nQkDS3whV3YjRjbwWPfQU/edit#
 */

function ImageCard({ artist, artMovement }) {
  const [artistData, setArtistData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [imageLoaded, setImageLoaded] = useState(true);

  /* Get artist's data */
  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://www.wikiart.org/en/${artist}?json=2`;
    const imagesUrl = `https://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${artist}&json=2`;

    const fetchData = async () => {
      const options = {
        method: "GET",
        mode: "no-cors"
      };
      /* Get Artist data from wikiart */
      const response = await fetch(proxyUrl + targetUrl);
      const data = await response.json();

      /* Get artists images from wikiart */
      const responseImg = await fetch(proxyUrl + imagesUrl);
      const dataImg = await responseImg.json();

      /* Shuffle images, to always take random 10, not the same ones */
      const shuffled = [...dataImg].sort(() => 0.5 - Math.random());

      /* Take only first 10 images */
      const slicedImages = shuffled.slice(0, 10);
      let images = [];

      slicedImages.forEach((element) => {
        images.push({ title: element.title, img: element.image });
      });

      /* Set data and inform, that the data has been laoded. */
      setImageData(images);
      setArtistData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [artist]);

  /* Console Print artist data */
  useEffect(() => {
    if (artistData == null) return;

    console.info(artistData);
  }, [artistData]);

  //let artistInfo = getArtistFromApiAsync(artist);
  //console.info(artistInfo);

  /* We still have no data */
  if (isLoading) {
    return (
      <div>
        <h2 style={{ color: "white" }}>LOADING...</h2>
        <h3>
          <a
            style={{ color: "gray" }}
            href="https://cors-anywhere.herokuapp.com/corsdemo"
          >
            If page loading more than 5s, enable CORS on this website
          </a>
        </h3>
      </div>
    );
  }

  const artistNameArr = artistData.artistName.split(" ");

  /* Get artist name */
  const name = artistNameArr[0];

  /* Take the remaining surrnames, as artist can have more than 1 */
  const surrname = artistNameArr.slice(1).join(" ");

  return (
    <div className="image-card">
      <div className="image-header">
        <div className="image-container">
          {imageLoaded ? (
            <img
              src={artistData.image}
              alt={artistData.artistName}
              onError={() => setImageLoaded(false)}
            />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              alt="Default Avatar"
            />
          )}
        </div>
        <div className="content">
          <h1>{name}</h1>
          <h1>{surrname}</h1>
          <p>Art Movement: {artMovement}</p>
          <a href={`https://www.wikiart.org/en/${artist}`}>
            View Authors WikiArt Page
          </a>
        </div>
      </div>
      <ImageList className="imageList" images={imageData} />
    </div>
  );
}

export default ImageCard;
