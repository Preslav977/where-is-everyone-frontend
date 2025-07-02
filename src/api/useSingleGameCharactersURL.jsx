import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleGameCharactersContext } from "../App";
import { localhostURL } from "../utils/localhostURL";

const useSingleGameCharactersURL = () => {
  const [singleGameCharacters, setSingleGameCharacters] = useContext(
    SingleGameCharactersContext,
  );

  const [errorCharacters, setErrorCharacters] = useState(null);

  const [loadingCharacters, setLoadingCharacters] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${localhostURL}/characters/${id}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setSingleGameCharacters(response))
      .catch((errorCharacters) => setErrorCharacters(errorCharacters))
      .finally(() => setLoadingCharacters(false));
  }, [id, setSingleGameCharacters]);

  return {
    singleGameCharacters,
    setSingleGameCharacters,
    errorCharacters,
    loadingCharacters,
  };
};

export default useSingleGameCharactersURL;
