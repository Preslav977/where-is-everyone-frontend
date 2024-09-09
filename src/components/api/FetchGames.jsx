import style from "./FetchGames.module.css";
import GameComponent from "../GameComponent";
import NavComponent from "../NavComponent";
import useGamesURL from "./useGamesURL";

function FetchGames() {
  const { games, error, loading } = useGamesURL();

  if (loading)
    return (
      <div data-testid="loading" className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
      </div>
    );

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
        <h2 className={style.mainGameHeader}>Games</h2>
        <section className={style.mainGameSection}>
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
        </section>
      </main>
    </>
  );
}

export default FetchGames;
