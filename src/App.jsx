import { useState, useEffect, useRef } from "react";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import DropDownMenuContent from "./components/DropDownMenuContent";
import "./App.css";

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const dropdownRef = useRef(null);

  useEffect(() => {
    function getCoordinates(e) {
      const retrieveCoordinates = {
        ...coordinates,
        x: event.offsetX,
        y: event.offsetY,
      };

      setCoordinates(retrieveCoordinates);

      console.log(coordinates);
    }

    if (dropdownRef.current.style.display === "none") {
      dropdownRef.current.style.display = "flex";
    } else {
      dropdownRef.current.style.display = "none";
    }

    window.addEventListener("click", getCoordinates);
    return () => window.removeEventListener("click", getCoordinates);
  });

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
      <div
        style={{
          display: "none",
        }}
        ref={dropdownRef}
      >
        <div className="dropDownContent">
          <div
            style={{
              transform: `translate(${coordinates.x - 35}px, ${coordinates.y - 35}px)`,
            }}
            className="dropDownTargetingBox"
          >
            <div className="targetingBoxDot"></div>
          </div>
          <div
            style={{
              transform: `translate(${coordinates.x - 35}px, ${coordinates.y - 35}px)`,
            }}
            className="dropDownMenu"
          >
            <DropDownMenuContent
              characterImgSrc="raft-man.png"
              characterImgDesc="Raft Mam"
              characterName="Raft Man"
            />
            <DropDownMenuContent
              characterImgSrc="wizard.png"
              characterImgDesc="Wizard"
              characterName="Wizard"
            />
            <DropDownMenuContent
              characterImgSrc="dragon.png"
              characterImgDesc="Dragon"
              characterName="Dragon"
            />
          </div>
        </div>
      </div>
      <MainComponent
        gameImgSrc="dragon-charmers-island.jpg"
        gameImgDesc="Dragon Charmers Island"
      />
      <FooterComponent />
    </>
  );
}

export default App;
