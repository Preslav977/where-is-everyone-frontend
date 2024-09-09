import { useEffect, useState, useRef } from "react";
import MainComponent from "../MainComponent";
import DropDownMenuContent from "../DropDownMenuContent";
import Dialog from "../Dialog";
import NavComponent from "../NavComponent";
import style from "../NavComponent.module.css";
import { useNavigate } from "react-router-dom";
import useSingleGameURL from "./useSingleGameURL";
import useSingleGameCharactersURL from "./useSingleGameCharactersURL";

function FetchSingleGame() {
  const { singleGame, error, loading } = useSingleGameURL();

  const {
    singleGameCharacters,
    setSingleGameCharacters,
    errorCharacters,
    loadingCharacters,
  } = useSingleGameCharactersURL();

  const gameImageRef = useRef(null);

  const targetingBoxAndCharactersDropDownRef = useRef(null);

  const timeInterval = useRef(null);

  const navigate = useNavigate();

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [imageWidthAndHeight, setImageWidthAndHeight] = useState({
    width: 0,
    height: 0,
  });

  const [gameTimer, setGameTimer] = useState(0);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [gameSessionID, setGameSessionID] = useState(0);

  const [checkIfGameIsFinished, setCheckIfGameIsFinished] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);

  let calculateStartAndCurrentTime = 0;

  const targetingBoxDimension = 70;

  const centerTargetingBox = targetingBoxDimension / 2;

  useEffect(() => {
    function getCoordinates(e) {
      const rect = e.target.getBoundingClientRect();

      const retrieveAndSetCoordinates = {
        ...coordinates,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      setCoordinates(retrieveAndSetCoordinates);

      if (
        e.target.tagName === "IMG" &&
        targetingBoxAndCharactersDropDownRef.current.style.display === "none"
      ) {
        targetingBoxAndCharactersDropDownRef.current.style.display = "flex";
      } else {
        targetingBoxAndCharactersDropDownRef.current.style.display = "none";
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
      const newGameSession = await fetch("http://localhost:3000/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          game: singleGame._id,
          characters: singleGameCharacters,
        }),
      });
      const newGameSessionResult = await newGameSession.json();

      console.log(newGameSessionResult);

      const startTime = new Date(newGameSessionResult.startTime);

      console.log(startTime);

      const currentTime = new Date();

      calculateStartAndCurrentTime =
        startTime.getTime() - currentTime.getTime();

      console.log(calculateStartAndCurrentTime);

      setGameSessionID(newGameSessionResult._id);
    } catch (err) {
      console.log(err);
    }
  }

  function startTimer() {
    if (isTimerRunning) return;
    setIsTimerRunning(true);
    timeInterval.current = setInterval(() => {
      setGameTimer((count) => count + 1);
    }, calculateStartAndCurrentTime);
  }

  function pauseTimer() {
    if (!isTimerRunning) return;
    setIsTimerRunning(false);
    clearInterval(timeInterval.current);
  }

  function formatTime(gameTimer) {
    const minutes = Math.floor(gameTimer / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((gameTimer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(gameTimer % 1000)
      .toString()
      .padStart(3, "0");

    return { minutes, seconds, milliseconds };
  }

  const { minutes, seconds, milliseconds } = formatTime(gameTimer);

  async function normalizeCoordinates(character) {
    const copyCoords = { ...coordinates };

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

    try {
      const markCharacterIfFound = await fetch(
        "http://localhost:3000/session/:coordinates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: gameSessionID,
            characterId: character._id,
            lowerX: mousePositionsObject.lowerX,
            upperX: mousePositionsObject.upperX,
            lowerY: mousePositionsObject.lowerY,
            upperY: mousePositionsObject.upperY,
          }),
        },
      );

      const markCharacterIfFoundResult = await markCharacterIfFound.json();

      console.log(markCharacterIfFoundResult);

      if (markCharacterIfFoundResult.message !== "Target not found") {
        setSingleGameCharacters(
          singleGameCharacters.map((obj) => {
            if (obj._id === character._id) {
              return { ...obj, marked: true };
            } else {
              return obj;
            }
          }),
        );
      } else {
        return;
      }

      try {
        const checkIfGameIsDone = await fetch(
          "http://localhost:3000/session/:id",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: gameSessionID,
            }),
          },
        );

        const checkIfGameIsDoneResult = await checkIfGameIsDone.json();

        console.log(checkIfGameIsDone);

        let calculateElapsedTime =
          Date.parse(checkIfGameIsDoneResult.endTime) -
          Date.parse(checkIfGameIsDoneResult.startTime);

        let calculatePlayerScore = calculateElapsedTime / 1000;

        setPlayerScore(calculatePlayerScore);

        pauseTimer();

        setCheckIfGameIsFinished(true);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function declareWinner(e) {
    const Form = new FormData(e.target);

    const username = Form.get("username");

    try {
      const createUser = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          score: playerScore,
        }),
      });

      const createUserResult = await createUser.json();

      console.log(createUserResult);

      try {
        const addPlayerToLeaderBoard = await fetch(
          "http://localhost:3000/leaderboard/:id",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: singleGame.leaderboard._id,
              userId: createUserResult._id,
            }),
          },
        );
        const addPlayerToLeaderBoardResult =
          await addPlayerToLeaderBoard.json();

        console.log(addPlayerToLeaderBoardResult);

        navigate(`/leaderboard/${singleGame._id}`);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loading && loadingCharacters)
    return (
      <div className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
      </div>
    );

  if (error && errorCharacters)
    <div>
      return <p>A network error was encountered</p>
    </div>;

  return (
    <>
      <NavComponent
        gameTime={minutes + ":" + seconds + ":" + milliseconds}
        showLeaderBoardLink={false}
      >
        {singleGameCharacters.map((character) => (
          <div
            key={character._id}
            className={style.navContentFlexCharContainer}
          >
            <img
              className={style.navContentFlexCharImg}
              src={character.character_image}
              alt={"Dragon Charmers Island Characters"}
            />
            {!character.marked ? (
              <p className={style.navContentFlexCharName}>
                {character.character_name}
              </p>
            ) : (
              <p className={style.navContentFlexCharNameMarked}>
                {character.character_name}
              </p>
            )}
          </div>
        ))}
      </NavComponent>
      <MainComponent
        gameImageSrc={singleGame.image_link}
        // gameImageDescription={singleGameLoader.game_name}
        onLoad={startGame}
        useRefProp={gameImageRef}
        onLoadTimer={startTimer}
        position={checkIfGameIsFinished ? "fixed" : ""}
      >
        {checkIfGameIsFinished ? (
          <Dialog onSubmit={declareWinner} playerScore={`${playerScore}s`} />
        ) : (
          ""
        )}
        {singleGameCharacters.map((character) =>
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
                  height: "20x",
                }}
                src="character-found.svg"
                alt="Marker on found character"
              />
            </div>
          ) : (
            ""
          ),
        )}
        <div
          data-testid="targeting-box"
          style={{
            display: "none",
            position: "absolute",
            left: `${coordinates.x - centerTargetingBox}px`,
            top: `${coordinates.y - centerTargetingBox}px`,
          }}
          ref={targetingBoxAndCharactersDropDownRef}
        >
          <div className="dropDownContent">
            <div
              className={`${!checkIfGameIsFinished ? "dropDownTargetingBox" : "hideDropDownTargetingBox"}`}
            >
              <div
                className={`${!checkIfGameIsFinished ? "targetingBoxDot" : "hideTargetingBoxDot"}`}
              ></div>
            </div>
            <div
              style={{
                left: `${coordinates.x - centerTargetingBox}px`,
                top: `${coordinates.y - centerTargetingBox}px`,
              }}
              className={`${!checkIfGameIsFinished ? "dropDownMenu" : "hideDropDownMenu"}`}
            >
              {singleGameCharacters.map((character) =>
                !character.marked ? (
                  <DropDownMenuContent
                    onClick={() => normalizeCoordinates(character)}
                    key={character._id}
                    characterImageSrc={character.character_image}
                    characterImageDescription={singleGame.game_name}
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
    </>
  );
}

export default FetchSingleGame;

// export const fetchSingleGameLoader = async (params) => {
//   // const response = await fetch(`http://localhost:3000/games/${params}`);
//   // return await response.json();
// };
