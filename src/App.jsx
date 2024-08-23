import { useState, createContext } from "react";

import FooterComponent from "./components/FooterComponent";
import "./App.css";
import { Outlet } from "react-router-dom";

export const GameContext = createContext(null);

export const SingleGameContext = createContext(null);

export const MainMenuContext = createContext(null);

function App() {
  const [games, setGames] = useState([]);

  const [singleGame, setSingleGame] = useState();

  return (
    <>
      <SingleGameContext.Provider value={[singleGame, setSingleGame]}>
        <GameContext.Provider value={[games, setGames]}>
          <Outlet />
        </GameContext.Provider>
      </SingleGameContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
