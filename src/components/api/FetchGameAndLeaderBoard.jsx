import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleGameContext } from "../../App";

function FetchGameAndLeaderBoard() {
  const [singleGame, setSingleGame] = useContext(SingleGameContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(singleGame);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/photos/${id}`, {
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

  if (singleGame === undefined) {
    return (
      <h1
        style={{
          color: "white",
        }}
      >
        Choose a game to see leaderboard
      </h1>
    );
  } else {
    return (
      <div
        style={{
          outline: "2px solid white",
          display: "flex",
          flexGrow: "1",
        }}
      >
        {singleGame.leaderboard.users.map((user) => (
          <p></p>
        ))}
      </div>
    );
  }
}

export default FetchGameAndLeaderBoard;
