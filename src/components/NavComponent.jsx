import style from "./NavComponent.module.css";

import PropTypes from "prop-types";

import { useContext, useRef } from "react";
import DropDownMenuContent from "./DropDownMenuContent";
import { SingleGameCharactersContext } from "../App";

function NavComponent({ gameTime, showLeaderBoardLink, children }) {
  const dropDownCharactersRef = useRef(null);

  const [singleGameCharacters, setSingleGameCharacters] = useContext(
    SingleGameCharactersContext,
  );

  function toggleCharactersDropDown() {
    if (dropDownCharactersRef.current.style.display === "none") {
      dropDownCharactersRef.current.style.display = "block";
    } else {
      dropDownCharactersRef.current.style.display = "none";
    }
  }

  if (singleGameCharacters === undefined) {
    return (
      <nav className={style.navContainer}>
        <ul className={style.ulContainer}>
          <a href="/" data-testid="character">
            Character
            <span data-testid="hunt" className={style.navLinkSpan}>
              Hunt
            </span>
          </a>
        </ul>
        <p className={style.navContentGameTime}>{gameTime}</p>
        <div className={style.navContentFlexCharWrapper}>{children}</div>
        <div className={style.leaderBoardAndThemeBtnContainer}>
          {showLeaderBoardLink && (
            <div className={style.leaderBoardLinkContainer}>
              <a className={style.leaderBoardLink} href={"/leaderboard"}>
                Leaderboard
              </a>
            </div>
          )}
          <div>
            <button>Btn</button>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={style.navContainer}>
        <ul className={style.ulContainer}>
          <a href="/">
            Character<span className={style.navLinkSpan}>Hunt</span>
          </a>
        </ul>
        <p className={style.navContentGameTime}>{gameTime}</p>
        <div className={style.navContentFlexCharWrapper}>{children}</div>
        <nav className={style.navDropDownContainer}>
          <ul
            className={style.ulDropDownContent}
            onClick={toggleCharactersDropDown}
          >
            {singleGameCharacters.filter((char) => !char.marked).length}
          </ul>
          <ul className={style.ulDropDownContainer} ref={dropDownCharactersRef}>
            <li className={style.liDropDownContent}>
              {singleGameCharacters.map((character) =>
                !character.marked ? (
                  <DropDownMenuContent
                    key={character._id}
                    characterImageSrc={character.character_image}
                    characterImageDescription="Dragon Charmer Island characters"
                    characterName={character.character_name}
                  />
                ) : (
                  ""
                ),
              )}
            </li>
          </ul>
        </nav>
        <div className={style.leaderBoardAndThemeBtnContainer}>
          {showLeaderBoardLink && (
            <div className={style.leaderBoardLinkContainer}>
              <a className={style.leaderBoardLink} href={"/leaderboard"}>
                Leaderboard
              </a>
            </div>
          )}
          <div>
            <button></button>
          </div>
        </div>
      </nav>
    );
  }
}

NavComponent.propTypes = {
  gameTime: PropTypes.string,
  showLeaderBoardLink: PropTypes.bool,
  children: PropTypes.array,
};

export default NavComponent;
