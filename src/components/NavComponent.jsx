import style from "./NavComponent.module.css";
import PropTypes from "prop-types";

import { SingleGameContext } from "../App";
import { useContext } from "react";
import DropDownMenuContent from "./DropDownMenuContent";
import styles from "./DropDownMenuContent.module.css";

function NavComponent({ gameTime, showLeaderBoardLink, children }) {
  const [singleGame, setSingleGame] = useContext(SingleGameContext);

  const filterUnmarkedCharacters = singleGame.characters.filter(
    (char) => !char.marked,
  ).length;

  return (
    <nav className={style.navContainer}>
      <button className={style.navContentHomeBtn}>
        <a href="/">
          Character<span className={style.navLinkSpan}>Hunt</span>
        </a>
      </button>
      <p className={style.navContentGameTime}>{gameTime}</p>
      {/* <div className={style.navContentFlexCharWrapper}>{children}</div> */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            borderRadius: "50%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "white",
            }}
          >
            {filterUnmarkedCharacters}
          </p>
        </div>
        <ul
          style={{
            position: "absolute",
            zIndex: "1",
          }}
        >
          {singleGame.characters.map((character) =>
            !character.marked ? (
              <DropDownMenuContent
                key={character._id}
                characterImgSrc={character.character_image}
                characterImgDesc="Dragon Charmer Island characters"
                characterName={character.character_name}
              />
            ) : (
              ""
            ),
          )}
        </ul>
      </div>
      <div className={styles.leaderBoardAndThemeBtnContainer}>
        {showLeaderBoardLink && (
          <div className={styles.leaderboardLinkContainer}>
            <a className={styles.leaderboardLink} href={"/leaderboard"}>
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
}

NavComponent.propTypes = {
  gameTime: PropTypes.string,
  showLeaderBoardLink: PropTypes.bool,
  children: PropTypes.array,
};

export default NavComponent;
