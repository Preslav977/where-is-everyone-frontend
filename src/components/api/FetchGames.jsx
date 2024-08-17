import style from "./FetchGames.module.css";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../App";
import GameComponent from "../GameComponent";

function FetchGames() {
  const [games, setGames] = useContext(GameContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      .then((response) => setGames(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setGames]);

  if (loading)
    return (
      <div>
        <p data-testid="loading">Loading....</p>
      </div>
    );
  if (error)
    <div>
      return <p>A network error was encountered</p>
    </div>;

  return (
    <main className={style.mainGameContainer}>
      <section className={style.mainGameSection}>
        <h2>Games</h2>
        {games.map((game) => (
          <GameComponent
            key={game._id}
            gameImg={game.image_link}
            gameImgDesc={"Dragon Charmers Island"}
            gameName={"Dragon Charmers Island"}
            gameId={game._id}
          />
        ))}
      </section>
    </main>
  );
}

export default FetchGames;
