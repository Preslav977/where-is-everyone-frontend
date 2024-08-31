import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

export const AllGamesContext = createContext(null);

export const SingleGameContext = createContext(null);

export const SingleGameCharactersContext = createContext(null);

function App() {
  const [games, setGames] = useState([]);

  const [singleGameCharacters, setSingleGameCharacters] = useState();

  const [gameSessionID, setGameSessionID] = useState(0);

  return (
    <>
      <SingleGameCharactersContext.Provider
        value={[gameSessionID, setGameSessionID]}
      >
        <SingleGameContext.Provider
          value={[singleGameCharacters, setSingleGameCharacters]}
        >
          <AllGamesContext.Provider value={[games, setGames]}>
            <Outlet />
          </AllGamesContext.Provider>
        </SingleGameContext.Provider>
      </SingleGameCharactersContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
