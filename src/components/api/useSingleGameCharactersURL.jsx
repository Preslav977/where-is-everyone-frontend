import { SingleGameCharactersContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const useSingleGameCharactersURL = () => {
  const [singleGameCharacters, setSingleGameCharacters] = useContext(
    SingleGameCharactersContext,
  );

  const [errorCharacters, setErrorCharacters] = useState(null);

  const [loadingCharacters, setLoadingCharacters] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // setTimeout(() => {
    fetch(`http://localhost:3000/characters/${id}`, {
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
    // }, 3000);
  }, [id, setSingleGameCharacters]);

  return {
    singleGameCharacters,
    setSingleGameCharacters,
    errorCharacters,
    loadingCharacters,
  };
};

export default useSingleGameCharactersURL;