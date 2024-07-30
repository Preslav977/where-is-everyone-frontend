import { useState, useEffect, useRef } from "react";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import DropDownMenuContent from "./components/DropDownMenuContent";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [imageWidthAndHeight, setImageWidthAndHeight] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/character", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setCharacters(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setCharacters]);

  const targetingBoxDimension = 70;

  const centerTargetingBox = targetingBoxDimension / 2;

  const dropdownRef = useRef(null);

  useEffect(() => {
    function getCoordinates(e) {
      const rect = e.target.getBoundingClientRect();

      // console.log("Width", rect.width, "Height", rect.height);

      // console.log(rect);

      const retrieveAndSetCoordinates = {
        ...coordinates,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      setCoordinates(retrieveAndSetCoordinates);

      if (dropdownRef.current.style.display === "none") {
        dropdownRef.current.style.display = "flex";
      } else {
        dropdownRef.current.style.display = "none";
      }

      const retrieveAndSetImageDimensions = {
        ...imageWidthAndHeight,
        width: rect.width,
        height: rect.height,
      };

      if (rect.width === 5 && rect.height === 5) {
        return;
      } else {
        setImageWidthAndHeight(retrieveAndSetImageDimensions);
      }
    }

    window.addEventListener("click", getCoordinates);
    return () => window.removeEventListener("click", getCoordinates);
  });

  function normalizeCoordinates() {
    const copyCoords = { ...coordinates };

    // console.log(coordinates);

    const findLowerBoundX =
      ((copyCoords.x - centerTargetingBox) / imageWidthAndHeight.width) * 100;

    const findLowerBoundY =
      ((copyCoords.y - centerTargetingBox) / imageWidthAndHeight.height) * 100;

    const findUpperBoundX =
      ((copyCoords.x + centerTargetingBox) / imageWidthAndHeight.width) * 100;

    const findUpperBoundY =
      ((copyCoords.y + centerTargetingBox) / imageWidthAndHeight.height) * 100;

    const mousePositionsObject = {
      lowerX: findLowerBoundX,
      upperX: findUpperBoundX,
      lowerY: findLowerBoundY,
      upperY: findUpperBoundY,
    };

    console.log(mousePositionsObject);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>A network error was encountered</p>;
  }

  console.log(characters);

  return (
    <>
      <NavComponent
        gameTime="0:00:00"
        firstCharImg={characters[0].character_image}
        firstCharImgDesc="Raft Man character"
        firstCharName={characters[0].character_name}
        secondCharImg={characters[1].character_image}
        secondCharImgDesc="Wizard character"
        secondCharName={characters[1].character_name}
        thirdCharImg={characters[2].character_image}
        thirdCharImgDesc="Dragon character"
        thirdCharName={characters[2].character_name}
      />
      <div
        style={{
          display: "none",
        }}
        ref={dropdownRef}
        onClick={normalizeCoordinates}
      >
        <div className="dropDownContent">
          <div
            style={{
              transform: `translate(${coordinates.x - centerTargetingBox}px, ${coordinates.y - centerTargetingBox}px)`,
            }}
            className="dropDownTargetingBox"
          >
            <div className="targetingBoxDot"></div>
          </div>
          <div
            style={{
              transform: `translate(${coordinates.x - centerTargetingBox}px, ${coordinates.y - centerTargetingBox}px)`,
            }}
            className="dropDownMenu"
          >
            {characters.map((character) => (
              <DropDownMenuContent
                key={character._id}
                characterImgSrc={character.character_image}
                characterImgDesc="Dragon Charmer Island characters"
                characterName={character.character_name}
              />
            ))}
          </div>
        </div>
      </div>
      <MainComponent
        gameImgSrc={characters[0].photo.image_link}
        gameImgDesc="Dragon Charmers Island Game"
      />
      <FooterComponent />
    </>
  );
}

export default App;
