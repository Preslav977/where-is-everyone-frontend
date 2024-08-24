import { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import MainComponent from "../MainComponent";
import DropDownMenuContent from "../DropDownMenuContent";
import Dialog from "../Dialog";
import NavComponent from "../NavComponent";
import { SingleGameContext } from "../../App";
import style from "../NavComponent.module.css";
import { useNavigate } from "react-router-dom";

function FetchSingleGame() {
  const [singleGame, setSingleGame] = useContext(SingleGameContext);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [imageWidthAndHeight, setImageWidthAndHeight] = useState({
    width: 0,
    height: 0,
  });

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const gameImageRef = useRef(null);

  const [gameSessionID, setGameSessionID] = useState(0);

  const [gameTimer, setGameTimer] = useState(0);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const timeInterval = useRef(null);

  const [checkIfGameIsFinished, setCheckIfGameIsFinished] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch(`where-is-everyone-backend-production.up.railway.app/game/${id}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setSingleGame(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id, setSingleGame]);

  let calculateStartAndCurrentTime = 0;

  const targetingBoxDimension = 70;

  const centerTargetingBox = targetingBoxDimension / 2;

  const targetingBoxAndCharactersDropDownRef = useRef(null);

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
    const newGameResponse = await fetch(
      "https://where-is-everyone-backend-production.up.railway.app/characters/reset",
      {
        method: "PUT",
      },
    );
    const resultNewGame = await newGameResponse.json();
    console.log(resultNewGame);
    const refetchCharacters = await fetch(
      "https://where-is-everyone-backend-production.up.railway.app/characters",
      {
        mode: "cors",
      },
    );
    const characters = await refetchCharacters.json();
    console.log(characters);
    const updateCharacters = {
      ...singleGame,
      characters: characters,
    };
    setSingleGame(updateCharacters);

    try {
      const response = await fetch(
        "https://where-is-everyone-backend-production.up.railway.app/session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            game: singleGame._id,
          }),
        },
      );

      const result = await response.json();

      console.log(result);

      const startTime = new Date(result.startTime);

      const currentTime = new Date();

      calculateStartAndCurrentTime =
        startTime.getTime() - currentTime.getTime();

      setGameSessionID(result._id);
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
      const response = await fetch(
        "https://where-is-everyone-backend-production.up.railway.app/characters/:coordinates",
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
        "https://where-is-everyone-backend-production.up.railway.app/characters",
        {
          mode: "cors",
        },
      );

      const characters = await refetchCharacters.json();

      const updateCharacters = {
        ...singleGame,
        characters: characters,
      };

      setSingleGame(updateCharacters);

      try {
        const checkIfGameIsDone = await fetch(
          "https://where-is-everyone-backend-production.up.railway.app/session/:id",
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

        const checkIfGameIsDoneJSON = await checkIfGameIsDone.json();

        let calculateElapsedTime =
          Date.parse(checkIfGameIsDoneJSON.endTime) -
          Date.parse(checkIfGameIsDoneJSON.startTime);

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
      const response = await fetch(
        "https://where-is-everyone-backend-production.up.railway.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            score: playerScore,
            photo: singleGame._id,
          }),
        },
      );

      const result = await response.json();

      console.log(result);

      try {
        const leaderBoardResponse = await fetch(
          "https://where-is-everyone-backend-production.up.railway.app/leaderboard/:id",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: singleGame.leaderboard._id,
              userId: result._id,
            }),
          },
        );
        const resultLeaderBoard = await leaderBoardResponse.json();

        console.log(resultLeaderBoard);

        navigate(`/leaderboard/${singleGame._id}`);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loading)
    return (
      <div className="loadingContainer">
        <img className="loading" src="loading.svg" alt="" />
      </div>
    );

  if (error)
    <div>
      return <p>A network error was encountered</p>
    </div>;

  return (
    <>
      <NavComponent
        gameTime={minutes + ":" + seconds + ":" + milliseconds}
        showLeaderBoardLink={false}
      >
        {singleGame.characters.map((character) => (
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
        useRefProp={gameImageRef}
        gameImageSrc={singleGame.image_link}
        gameImageDescription={singleGame.game_name}
        onLoad={startTimer}
        onLoadTimer={startGame}
        position={checkIfGameIsFinished ? "fixed" : ""}
      >
        {checkIfGameIsFinished ? (
          <Dialog onSubmit={declareWinner} playerScore={`${playerScore}s`} />
        ) : (
          ""
        )}
        {singleGame.characters.map((character) =>
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
              {singleGame.characters.map((character) =>
                !character.marked ? (
                  <DropDownMenuContent
                    onClick={() => normalizeCoordinates(character)}
                    key={character._id}
                    characterImageSrc={character.character_image}
                    characterImageDescription="Dragon Charmer Island Characters"
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
