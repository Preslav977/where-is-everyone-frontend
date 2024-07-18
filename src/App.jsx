import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <NavComponent
        gameTime="0:00:00"
        firstCharImg="raft-man.png"
        firstCharImgDesc="Raft Man character"
        firstCharName="Raft Man"
        secondCharImg="wizard.png"
        secondCharImgDesc="Wizard character"
        secondCharName="Wizard"
        thirdCharImg="dragon.png"
        thirdCharImgDesc="Dragon character"
        thirdCharName="Dragon"
      />
      <MainComponent
        gameImgSrc="dragon-charmers-island.jpg"
        gameImgDesc="Dragon Charmers Insland"
      />
    </>
  );
}

export default App;
