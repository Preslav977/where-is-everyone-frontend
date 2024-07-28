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

      console.log("Width", rect.width, "Height", rect.height);

      // console.log(rect);

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

    //Raft Man Coordinates Big Screen 98 X, 1140 Y, 1915px width, 2702.90625 px height

    //Normalized Coordinates X 5,12, Coordinate Y 42.18 Big Screen

    //Raft Man Coordinates Small Screen 45 X 519 Y, 876px width, 1236.40625px height

    //Normalized Coordinates X 5,14 Coordinate Y 41.98 Small Screen

    //////////////////////////////////////////////////////////////////////////////////

    //Dragon Coordinates Big Screen 1269 X, 1149 Y, 1915px width, 2702.90625 px height

    //Normalized Coordinates X 66.27, Coordinate Y 42.51 Big Screen

    //Dragon Coordinates Small Screen 579 X, 523 Y, 874px width, 1233.59375 px height

    //Normalized Coordinates X 66.25. Coordinate Y 42.40 Small Screen

    /////////////////////////////////////////////////////////////////////////////////

    //Wizard Coordinates Big Screen 1453 X, 1780 Y, 1915px width, 2702.90625 px height

    //Normalized Coordinates X 75.87, 65.85 Y Big Screen

    //Wizard Coordinates Small Screen 661 X, 812 Y, 874px width, 1233.59375 px height

    //Normalized Coordinates X 75.73, 65.82 Y Small Screen

    console.log(copyCoords);

    const normalizedCoordRaftManX = 5.12;

    const normalizedCoordRaftManY = 42.18;

    const normalizedCoordDragonX = 66.27;

    const normalizedCoordDragonY = 42.51;

    const normalizedCoordWizardX = 75.87;

    const normalizedCoordWizardY = 65.85;

    const findLowerBoundX =
      ((copyCoords.x - divideTargetingBox) / imageWidthAndHeight.width) * 100;

    const findLowerBoundY =
      ((copyCoords.y - divideTargetingBox) / imageWidthAndHeight.height) * 100;

    console.log(findLowerBoundX, findLowerBoundY);

    const findUpperBoundX =
      ((copyCoords.x + divideTargetingBox) / imageWidthAndHeight.width) * 100;

    const findUpperBoundY =
      ((copyCoords.y + divideTargetingBox) / imageWidthAndHeight.height) * 100;

    console.log(findUpperBoundX, findUpperBoundY);

    // if (
    //   normalizedCoordRaftManX <= findLowerBoundX ||
    //   normalizedCoordRaftManX >= findUpperBoundX ||
    //   normalizedCoordRaftManY <= findLowerBoundY ||
    //   normalizedCoordRaftManY >= findUpperBoundY
    // ) {
    //   console.log("Target not found");
    // } else {
    //   console.log("You found Raft Man");
    // }

    // if (
    //   normalizedCoordDragonX <= findLowerBoundX ||
    //   normalizedCoordDragonX >= findUpperBoundX ||
    //   normalizedCoordDragonY <= findLowerBoundY ||
    //   normalizedCoordDragonY >= findUpperBoundY
    // ) {
    //   console.log("Target not found");
    // } else {
    //   console.log("You found Dragon.");
    // }

    // if (
    //   normalizedCoordWizardX <= findLowerBoundX ||
    //   normalizedCoordWizardX >= findUpperBoundX ||
    //   normalizedCoordWizardY <= findLowerBoundY ||
    //   normalizedCoordWizardY >= findUpperBoundY
    // ) {
    //   console.log("Target not found");
    // } else {
    //   console.log("You found Wizard.");
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
