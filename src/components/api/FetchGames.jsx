import style from "./FetchGames.module.css";
import { useContext, useEffect, useState } from "react";
import { AllGamesContext } from "../../App";
import GameComponent from "../GameComponent";
import NavComponent from "../NavComponent";
import { SingleGameContext } from "../../App";
import LeaderBoardTable from "./LeaderBoardTable";
import { format } from "date-fns";
import useGamesURL from "./useGamesURL";

function FetchGames() {
  const { games, error, loading } = useGamesURL();

  // async function getGameIdOnClick(game) {
  //   try {
  //     const response = await fetch(`http://localhost:3000/game/${game._id}`, {
  //       mode: "cors",
  //     });

  //     const singleGame = await response.json();

  //     const updateSingleGameObject = {
  //       ...singleGame,
  //       singleGame,
  //     };

  //     setSingleGame(updateSingleGameObject);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function navigateToSingleGame() {
  //   navigate("/66d1a12dcec8c4497322b73e");
  // }

  if (loading)
    return (
      <div data-testid="loading" className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
      </div>
    );

  if (error)
    return (
      <div>
        return <p data-testid="error">A network error was encountered</p>
      </div>
    );

  return (
    <>
      <NavComponent showLeaderBoardLink={true} />
      <main className={style.mainGameContainer}>
        <h2 className={style.mainGameHeader}>Games</h2>
        <section className={style.mainGameSection}>
          {games.map((game) => (
            <GameComponent
              key={game._id}
              // onClick={navigateToSingleGame}
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

  // } else {
  //   return (
  //     <>
  //       <NavComponent showLeaderBoardLink={true} />
  //       <main className={style.mainGameContainer}>
  //         <h2 className={style.mainGameHeader}>Leaderboard</h2>
  //         <section className={style.mainGameSection}>
  //           {games.map((game) => (
  //             <GameComponent
  //               key={game._id}
  //               gameImage={game.image_link}
  //               gameName={game.game_name}
  //               showButton={true}
  //               gameLink={`/${game._id}`}
  //             />
  //           ))}
  //         </section>
  //         <div className={style.leaderboardGameContainer}>
  //           {/* <LeaderBoardTable>
  //             {singleGame.leaderboard.users.map((user, index) => (
  //               <tr key={user._id}>
  //                 <td className={style.tableCell}>{index + 1}</td>
  //                 <td>{user.username}</td>
  //                 <td>{user.score + "s"}</td>
  //                 <td>{format(Date.parse(user.date), "MMM dd, yyyy")}</td>
  //               </tr>
  //             ))}
  //           </LeaderBoardTable> */}
  //         </div>
  //       </main>
  //     </>
  //   );
  // }
}

export default FetchGames;
