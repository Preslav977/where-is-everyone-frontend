import { useState, useEffect, useRef } from "react";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import DropDownMenuContent from "./components/DropDownMenuContent";
import "./App.css";

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [imageWidthAndHeight, setImageWidthAndHeight] = useState({
    width: 0,
    height: 0,
  });

  const targetingBoxDimension = 70;

  const divideTargetingBox = targetingBoxDimension / 2;

  const dropdownRef = useRef(null);

  useEffect(() => {
    function getCoordinates(e) {
      const rect = e.target.getBoundingClientRect();

      // console.log("Width", rect.width, "Height", rect.height);

      console.log(rect);

      const retrieveAndSetCoordinates = {
        ...coordinates,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      setCoordinates(retrieveAndSetCoordinates);

      if (dropdownRef.current.style.display === "none") {
        dropdownRef.current.style.display = "flex";
      } else {
        dropdownRef.current.style.display = "none";
      }

      const retrieveAndSetImageDimensions = {
        ...imageWidthAndHeight,
        width: rect.width,
        height: rect.height,
      };

      if (rect.width === 5 && rect.height === 5) {
        return;
      } else {
        setImageWidthAndHeight(retrieveAndSetImageDimensions);
      }
    }

    window.addEventListener("click", getCoordinates);
    return () => window.removeEventListener("click", getCoordinates);
  });

  function printCoordinates() {
    const copyCoords = { ...coordinates };

    console.log(copyCoords);

    const normalizeRaftManX = (copyCoords.x / imageWidthAndHeight.width) * 100;

    const normalizeRaftManY = (copyCoords.y / imageWidthAndHeight.height) * 100;

    // console.log(
    //   "Normalized X",
    //   normalizeRaftManX,
    //   "Normalized Y",
    //   normalizeRaftManY,
    // );

    const findLowerBoundX =
      ((copyCoords.x - divideTargetingBox) / imageWidthAndHeight.width) * 100;

    const findLowerBoundY =
      ((copyCoords.y - divideTargetingBox) / imageWidthAndHeight.height) * 100;

    // console.log(findLowerBoundX, findLowerBoundY);

    const findUpperBoundX =
      ((copyCoords.x + divideTargetingBox) / imageWidthAndHeight.width) * 100;

    const findUpperBoundY =
      ((copyCoords.y + divideTargetingBox) / imageWidthAndHeight.height) * 100;

    // console.log(findUpperBoundX, findUpperBoundY);

    // if (
    //   normalizeRaftManX <= findLowerBoundX ||
    //   normalizeRaftManX >= findUpperBoundX ||
    //   normalizeRaftManY <= findLowerBoundY ||
    //   normalizeRaftManY >= findUpperBoundY
    // ) {
    //   console.log("Target not found");
    // } else {
    //   console.log("You found Raft Man");
    // }
  }

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
        onClick={printCoordinates}
      >
        <div className="dropDownContent">
          <div
            style={{
              transform: `translate(${coordinates.x - divideTargetingBox}px, ${coordinates.y - divideTargetingBox}px)`,
            }}
            className="dropDownTargetingBox"
          >
            <div className="targetingBoxDot"></div>
          </div>
          <div
            style={{
              transform: `translate(${coordinates.x - divideTargetingBox}px, ${coordinates.y - divideTargetingBox}px)`,
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
        gameImgDesc="Dragon Charmers Island Game"
      />
      <FooterComponent />
    </>
  );
}

export default App;
