import { SingleGameContext } from "../../App";
import GameComponent from "../GameComponent";
import NavComponent from "../NavComponent";
import LeaderBoardTable from "./LeaderBoardTable";
import { useContext } from "react";
import { format } from "date-fns";
import useGamesURL from "./useGamesURL";
import style from "./FetchGamesLeaderBoard.module.css";

function FetchGamesLeaderBoard() {
  const { games, error, loading } = useGamesURL();

  const [singleGame, setSingleGame] = useContext(SingleGameContext);

  async function retrieveGameId(game) {
    try {
      const response = await fetch(
        `https://relieved-snapdragon-longan.glitch.me/games/${game._id}`,
        {
          mode: "cors",
        },
      );

      const singleGame = await response.json();
      const updateSingleGameObject = {
        ...singleGame,
        singleGame,
      };
      setSingleGame(updateSingleGameObject);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) {
    return (
      <div data-testid="loading" className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p data-testid="error">A network error was encountered</p>
      </div>
    );
  }

  if (singleGame.leaderboard === undefined) {
    return (
      <>
        <NavComponent showLeaderBoardLink={true} />
        <main className={style.mainGameContainer}>
          <h1 className={style.mainGameHeader}>Leaderboard</h1>
          <div className={style.mainGameSection}>
            {games.map((game) => (
              <GameComponent
                key={game._id}
                onClick={() => retrieveGameId(game)}
                gameID={game._id}
                showLinkToLeaderBoard={true}
                gameImage={game.image_link}
                gameName={game.game_name}
                showButton={false}
                gameLink={`/${game._id}`}
              />
            ))}
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <NavComponent showLeaderBoardLink={true} />
        <main className={style.mainGameContainer}>
          <h1 className={style.mainGameHeader}>Leaderboard</h1>
          <div className={style.mainGameSection}>
            {games.map((game) => (
              <GameComponent
                key={game._id}
                onClick={() => retrieveGameId(game)}
                gameID={game._id}
                showLinkToLeaderBoard={true}
                gameImage={game.image_link}
                gameName={game.game_name}
                showButton={false}
                gameLink={`/${game._id}`}
              />
            ))}
          </div>
          <section className={style.leaderBoardGameContainer}>
            <h2 className={style.leaderBoardHeader}> {singleGame.game_name}</h2>
            {singleGame.leaderboard.users.length === 0 ? (
              <h3 className={style.leaderBoardContent}>
                No one has played the game, yet!
              </h3>
            ) : (
              <LeaderBoardTable>
                {singleGame.leaderboard.users.map((user, index) => (
                  <tr key={user._id}>
                    <td className={style.tableCell}>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.score + "s"}</td>
                    <td>{format(Date.parse(user.date), "MMM dd, yyyy")}</td>
                  </tr>
                ))}
              </LeaderBoardTable>
            )}
          </section>
        </main>
      </>
    );
  }
}

export default FetchGamesLeaderBoard;
