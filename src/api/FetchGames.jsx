import GameComponent from "../components/GameComponent";
import NavComponent from "../components/NavComponent";
import style from "./FetchGames.module.css";
import useGamesURL from "./useGamesURL";

function FetchGames() {
  const { games, error, loading } = useGamesURL();

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
        return <p data-testid="error">A network error was encountered</p>
      </div>
    );
  }

  return (
    <>
      <NavComponent showLeaderBoardLink={true} />
      <main className={style.mainGameContainer}>
        <h1 className={style.mainGameHeader}>Games</h1>
        <div className={style.mainGameSection}>
          {games.map((game) => (
            <GameComponent
              key={game._id}
              showLinkToLeaderBoard={false}
              gameID={game._id}
              gameImage={game.image_link}
              gameName={game.game_name}
              showButton={true}
              gameLink={`/${game._id}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default FetchGames;
