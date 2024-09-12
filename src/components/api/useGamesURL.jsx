import { AllGamesContext } from "../../App";
import { useEffect, useState, useContext } from "react";

const useGamesURL = () => {
  const [games, setGames] = useContext(AllGamesContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://relieved-snapdragon-longan.glitch.me/games", {
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

  return { games, error, loading };
};

export default useGamesURL;
