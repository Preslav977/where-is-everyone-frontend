import { Link } from "react-router-dom";
import style from "./GameComponent.module.css";
import PropTypes from "prop-types";

function GameComponent({
  onClick,
  gameLink,
  gameImage,
  gameImageDescription,
  gameName,
  showButton,
  gameID,
}) {
  return (
    <div onClick={onClick} className={style.gameContainer}>
      <div className={style.gameImgContainer}>
        <Link to={"/leaderboard/" + gameID}>
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
            <a href={gameLink}>Start Game</a>
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
