import style from "./FetchGames.module.css";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../App";
import GameComponent from "../GameComponent";
import NavComponent from "../NavComponent";
import { SingleGameContext } from "../../App";
import LeaderBoardTable from "./LeaderBoardTable";
import { format } from "date-fns";

function FetchGames() {
  const [games, setGames] = useContext(GameContext);
  const [singleGame, setSingleGame] = useContext(SingleGameContext);

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

  async function fetchGameId(game) {
    console.log(game);

    try {
      const response = await fetch(`http://localhost:3000/photos/${game._id}`, {
        mode: "cors",
      });

      const singleGame = await response.json();

      const obj = {
        ...singleGame,
        singleGame,
      };

      setSingleGame(obj);

      console.log(singleGame);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading)
    return (
      <div className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
      </div>
    );

  if (error)
    <div>
      return <p>A network error was encountered</p>
    </div>;

  if (singleGame === undefined) {
    return (
      <>
        <NavComponent showLeaderBoardLink={true} />

        <main className={style.mainGameContainer}>
          <section className={style.mainGameSection}>
            <h2>Games</h2>
            {games.map((game) => (
              <GameComponent
                onClick={() => fetchGameId(game)}
                gameLink={game._id}
                key={game._id}
                gameImg={game.image_link}
                gameImgDesc={"Dragon Charmers Island"}
                gameName={"Dragon Charmers Island"}
                gameId={game._id}
                showButton={true}
              />
            ))}
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        <NavComponent showLeaderBoardLink={true} />
        <main className={style.mainGameContainer}>
          <section className={style.mainGameSection}>
            <h2>Leaderboard</h2>
            {games.map((game) => (
              <GameComponent
                onClick={() => fetchGameId(game)}
                gameLink={game._id}
                key={game._id}
                gameImg={game.image_link}
                gameImgDesc={"Dragon Charmers Island"}
                gameName={"Dragon Charmers Island"}
                gameId={game._id}
                showButton={false}
              />
            ))}
            <LeaderBoardTable>
              {singleGame.leaderboard.users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.score + "s"}</td>
                  <td>{format(Date.parse(user.date), "MMM dd, yyyy")}</td>
                </tr>
              ))}
            </LeaderBoardTable>
          </section>
        </main>
      </>
    );
  }
}

export default FetchGames;
