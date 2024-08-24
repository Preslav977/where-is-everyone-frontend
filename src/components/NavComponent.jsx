import style from "./NavComponent.module.css";

import PropTypes from "prop-types";

import { SingleGameContext } from "../App";
import { useContext, useRef } from "react";
import DropDownMenuContent from "./DropDownMenuContent";

function NavComponent({ gameTime, showLeaderBoardLink, children }) {
  const [singleGame, setSingleGame] = useContext(SingleGameContext);

  const dropDownCharactersRef = useRef(null);

  function toggleCharactersDropDown() {
    if (dropDownCharactersRef.current.style.display === "none") {
      dropDownCharactersRef.current.style.display = "block";
    } else {
      dropDownCharactersRef.current.style.display = "none";
    }
  }

  if (singleGame === undefined) {
    return (
      <nav className={style.navContainer}>
        <ul className={style.ulContainer}>
          <a href="/">
            Character<span className={style.navLinkSpan}>Hunt</span>
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
            {singleGame.characters.filter((char) => !char.marked).length}
          </ul>
          <li className={style.liDropDownContent} ref={dropDownCharactersRef}>
            {singleGame.characters.map((character) =>
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
