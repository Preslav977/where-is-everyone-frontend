import { useState, useEffect, useRef, createContext } from "react";

import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";
import { Outlet } from "react-router-dom";

export const GameContext = createContext(null);

function App() {
  const [games, setGames] = useState([]);

  return (
    <>
      <NavComponent leaderBoardLink={"Leaderboard"} />
      <GameContext.Provider value={[games, setGames]}>
        <Outlet />
      </GameContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
