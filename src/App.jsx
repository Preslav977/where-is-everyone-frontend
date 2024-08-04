import { useState, useEffect, useRef, Fragment } from "react";

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

  async function normalizeCoordinates(character) {
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

    // console.log(mousePositionsObject);

    try {
      const response = await fetch(
        "http://localhost:3000/character/:coordinates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: character._id,
            lowerX: mousePositionsObject.lowerX,
            upperX: mousePositionsObject.upperX,
            lowerY: mousePositionsObject.lowerY,
            upperY: mousePositionsObject.upperY,
          }),
        },
      );

      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>A network error was encountered</p>;
  }

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
      <MainComponent
        gameImgSrc={characters[0].photo.image_link}
        gameImgDesc="Dragon Charmers Island Game"
      >
        <div
          style={{
            display: "none",
            position: "absolute",
            left: `${coordinates.x - 35}px`,
            top: `${coordinates.y - 35}px`,
          }}
          ref={dropdownRef}
        >
          <div className="dropDownContent">
            <div className="dropDownTargetingBox">
              <div className="targetingBoxDot"></div>
            </div>
            <div
              style={{
                left: `${coordinates.x - 35}px`,
                top: `${coordinates.y - 35}px`,
              }}
              className="dropDownMenu"
            >
              {characters.map((character) => (
                <Fragment key={character._id}>
                  {!character.marked ? (
                    <DropDownMenuContent
                      onClick={() => normalizeCoordinates(character)}
                      key={character._id}
                      characterImgSrc={character.character_image}
                      characterImgDesc="Dragon Charmer Island characters"
                      characterName={character.character_name}
                    />
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default App;

//  gameImgSrc={characters[0].photo.image_link}
//         gameImgDesc="Dragon Charmers Island Game"
