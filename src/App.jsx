import { useState, useEffect, useRef } from "react";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import DropDownMenuContent from "./components/DropDownMenuContent";
import "./App.css";

function App() {
  const [photoCharacters, setPhotoCharacters] = useState();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [imageWidthAndHeight, setImageWidthAndHeight] = useState({
    width: 0,
    height: 0,
  });

  const [sessionId, setSessionId] = useState(0);

  const [timer, setTimer] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const timeInterval = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/photos", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPhotoCharacters(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setPhotoCharacters]);

  function startTimer() {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((count) => count + 1);
    }, 10);
  }

  function pauseTimer() {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  }

  function formatTime(timer) {
    const minutes = Math.floor(timer / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(timer % 1000)
      .toString()
      .padStart(3, "0");

    return { minutes, seconds, milliseconds };
  }

  const { minutes, seconds, milliseconds } = formatTime(timer);

  const targetingBoxDimension = 70;

  const findCenterTargetingBox = targetingBoxDimension / 2;

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

  async function startGame() {
    try {
      const response = await fetch("http://localhost:3000/session/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photo: "66b9dca06513a8945e55bc90",
        }),
      });

      const result = await response.json();

      console.log(result);

      setSessionId(result._id);
    } catch (err) {
      console.log(err);
    }
  }

  async function normalizeCoordinates(character) {
    const copyCoords = { ...coordinates };

    const findLowerBoundX =
      ((copyCoords.x - findCenterTargetingBox) / imageWidthAndHeight.width) *
      100;

    const findLowerBoundY =
      ((copyCoords.y - findCenterTargetingBox) / imageWidthAndHeight.height) *
      100;

    const findUpperBoundX =
      ((copyCoords.x + findCenterTargetingBox) / imageWidthAndHeight.width) *
      100;

    const findUpperBoundY =
      ((copyCoords.y + findCenterTargetingBox) / imageWidthAndHeight.height) *
      100;

    const mousePositionsObject = {
      lowerX: findLowerBoundX,
      upperX: findUpperBoundX,
      lowerY: findLowerBoundY,
      upperY: findUpperBoundY,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/characters/:coordinates",
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

      const refetchCharacters = await fetch(
        "http://localhost:3000/characters",
        {
          mode: "cors",
        },
      );

      const characters = await refetchCharacters.json();

      const updateCharacters = {
        ...photoCharacters,
        characters: characters,
      };

      setPhotoCharacters(updateCharacters);

      try {
        console.log(sessionId);
        const endGame = await fetch("http://localhost:3000/session/:id", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: sessionId,
          }),
        });

        const postEndGame = await endGame.json();

        console.log(postEndGame);

        pauseTimer();
      } catch (err) {
        console.log(err);
      }
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
        gameTime={minutes + ":" + seconds + ":" + milliseconds}
        firstCharImg={photoCharacters.characters[0].character_image}
        firstCharImgDesc="Raft Man character"
        firstCharName={photoCharacters.characters[0].character_name}
        secondCharImg={photoCharacters.characters[1].character_image}
        secondCharImgDesc="Wizard character"
        secondCharName={photoCharacters.characters[1].character_name}
        thirdCharImg={photoCharacters.characters[2].character_image}
        thirdCharImgDesc="Dragon character"
        thirdCharName={photoCharacters.characters[2].character_name}
      />
      <MainComponent
        gameImgSrc={photoCharacters.image_link}
        gameImgDesc="Dragon Charmers Island Game"
        onLoadTimer={startTimer}
        onLoad={startGame}
      >
        {photoCharacters.characters.map((character) =>
          character.marked ? (
            <div
              key={character._id}
              style={{
                position: "absolute",
                left: `${character.coordinateX}%`,
                top: `${character.coordinateY}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src="character-found.svg"
                alt=""
              />
            </div>
          ) : (
            ""
          ),
        )}
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
              {photoCharacters.characters.map((character) =>
                !character.marked ? (
                  <DropDownMenuContent
                    onClick={() => normalizeCoordinates(character)}
                    key={character._id}
                    characterImgSrc={character.character_image}
                    characterImgDesc="Dragon Charmer Island characters"
                    characterName={character.character_name}
                  />
                ) : (
                  ""
                ),
              )}
            </div>
          </div>
        </div>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default App;
