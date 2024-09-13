import { SingleGameContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const useSingleGameURL = () => {
  const [singleGame, setSingleGame] = useContext(SingleGameContext);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://relieved-snapdragon-longan.glitch.me/games/${id}`, {
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
    }, 2000);
  }, [id, setSingleGame]);

  return { singleGame, setSingleGame, error, loading };
};

export default useSingleGameURL;
