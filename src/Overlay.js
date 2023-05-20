import ImageCard from "./ImageCard";
import "./styles.css";

function Overlay({ labelObject, onDisable }) {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onDisable();
    }
  };

  return (
    <div className="overlay" onClick={handleClick}>
      <ImageCard artist={labelObject.name} artMovement={labelObject.text} />
    </div>
  );
}

export default Overlay;
