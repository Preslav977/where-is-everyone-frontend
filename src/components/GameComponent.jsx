import { Link } from "react-router-dom";
import style from "./GameComponent.module.css";
import PropTypes from "prop-types";

function GameComponent({
  onClick,
  gameID,
  gameImage,
  gameImageDescription,
  gameName,
  showButton,
  gameLink,
}) {
  return (
    <div className={style.gameContainer}>
      <div className={style.gameImgContainer}>
        <Link to={"/66d1a12dcec8c4497322b73e"}>
          <img
            className={style.gameImage}
            src={gameImage}
            alt={gameImageDescription}
          />
        </Link>
      </div>
      <div className={style.gameDescription}>
        <h3>{gameName}</h3>
        {showButton && (
          <div className={style.gameDescriptionLinkContainer}>
            <a data-testid="start-game" href={gameLink}>
              Start Game
            </a>
            {/* <button data-testid="start-game" onClick={onClick}>
              Start Game
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}

GameComponent.propTypes = {
  gameImage: PropTypes.string,
  gameImageDescription: PropTypes.string,
  gameName: PropTypes.string,
  gameID: PropTypes.string,
  onClick: PropTypes.func,
  gameLink: PropTypes.string,
  showButton: PropTypes.bool,
};

export default GameComponent;
