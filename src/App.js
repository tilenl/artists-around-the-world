import "./styles.css";

import Globe from "react-globe.gl";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

import { DATA, globe } from "./labels";

import { startAnimation, clamp } from "./Helper";
import Overlay from "./Overlay";

/**
 * ROTATING EXAMPLE:
 * https://codesandbox.io/s/react-globe-forked-3ggy1y?file=/src/CustomGlobe.js
 */

export default function App() {
  /* ---------- DATA ---------- */
  /* If globe is to be moved to the let, this data is used */
  const w = window.innerWidth;
  const globeOffset = 0.0; /* <globeOffset>% to the left of the screen */
  const shiftAmmount = globeOffset * w;

  /* Size information for text and label size calculations*/
  const infoSizeRatio = 0.5;
  const infoSizeMin = 0.2;
  const infoSizeMax = 0.8;
  const showTextAltitude = 0.6;

  /* Transition delay when clicking on a lable */
  const clickTransitionDuration = 800;

  /* Initialized to max values */
  const [textSize, setTextSize] = useState(infoSizeMax);
  const [labelDotSize, setLabelDotSize] = useState(infoSizeMax);

  /* Globe reference, for calculations needing direct access to underlaying data */
  const globeRef = useRef();
  const [globeAltitude, setGlobeAltitude] = useState(1.0);

  /* Image Object to display ... use first element for initializer  */
  const [imgObject, setImgObject] = useState(null);

  /* Set whether overlay is show or not */
  const [showOverlay, setShowOverlay] = useState(false);

  /* ---------- END DATA ---------- */

  /* ---------- EFFECTS ---------- */
  useEffect(() => {
    const MAP_CENTER = { lat: 20, lng: 20, altitude: 2.0 };
    globeRef.current.pointOfView(MAP_CENTER, 0);
  }, [globeRef]);

  /* Initialization step - run once on mount*/
  useEffect(() => {
    //globeRef.current.controls().bumpScale = 100;
    //globeRef.current.controls().
    //console.info((globeRef.current.controls().bumpScale = 100));
  }, []);

  /* Calculate label and text size - when globe altitude changes, recalculate this */
  useEffect(() => {
    /* Calculate new size of info dots and text based on altitude of camera from globe */
    const newSize = clamp(
      globeAltitude * infoSizeRatio,
      infoSizeMin,
      infoSizeMax
    );

    /* Change size of dots and text */
    setTextSize(newSize);
    setLabelDotSize(newSize);
  }, [globeAltitude]);

  /* Calculations, when label is clicked - image object is changed */
  useEffect(() => {
    if (imgObject == null) return;
    /* Zoom to selected point */
    const countryLocation = {
      lat: imgObject.lat,
      lng: imgObject.lng,
      altitude: 0.5
    };

    globeRef.current.pointOfView(countryLocation, clickTransitionDuration);
  }, [imgObject]);

  /* Open overlay after clicking on a label */
  useEffect(() => {
    if (imgObject == null) return;

    const timeout = setTimeout(() => {
      console.log("useEffect after 2 seconds");
      setShowOverlay(true);
    }, clickTransitionDuration);

    // Clear timeout on unmount
    return () => clearTimeout(timeout);
  }, [imgObject]);
  /* ---------- END EFFECTS ---------- */

  const labelText = (d) => {
    if (globeAltitude < showTextAltitude) {
      return formatName(d.name);
    } else return "";
  };

  return (
    <div
      style={{
        marginLeft: `-${shiftAmmount}px`
      }}
    >
      <Globe
        ref={globeRef}
        width={w + shiftAmmount}
        globeImageUrl={globe.day.globeImage}
        backgroundImageUrl={globe.day.backgroundImage}
        bumpImageUrl={globe.day.bumpMap}
        labelsData={DATA}
        labelText={() => ""}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelSize={textSize}
        labelDotRadius={labelDotSize}
        labelColor={(d) => d.color}
        onZoom={({ lat, lng, altitude }) => setGlobeAltitude(altitude)}
        onLabelClick={(d) => setImgObject(d)}
      />
      {showOverlay && (
        <Overlay
          labelObject={imgObject}
          onDisable={() => {
            setShowOverlay(false);
            setImgObject(null);
          }}
        />
      )}
    </div>
  );
}

/* Formats the name "abubu-halil" into "Abubu Halil" */
function formatName(name) {
  return name
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
}
