import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

export const AllGamesContext = createContext(null);

export const SingleGameContext = createContext(null);

export const SingleGameCharactersContext = createContext(null);

function App() {
  const [games, setGames] = useState([]);

  const [singleGame, setSingleGame] = useState([]);

  const [singleGameCharacters, setSingleGameCharacters] = useState();

  return (
    <>
      <SingleGameContext.Provider value={[singleGame, setSingleGame]}>
        <SingleGameCharactersContext.Provider
          value={[singleGameCharacters, setSingleGameCharacters]}
        >
          <AllGamesContext.Provider value={[games, setGames]}>
            <Outlet />
          </AllGamesContext.Provider>
        </SingleGameCharactersContext.Provider>
      </SingleGameContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
