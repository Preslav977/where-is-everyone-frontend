import { Link } from "react-router-dom";
import style from "./GameComponent.module.css";
import PropTypes from "prop-types";

function GameComponent({
  gameImg,
  gameImgDesc,
  gameName,
  gameId,
  onClick,
  gameLink,
  showButton,
}) {
  return (
    <div onClick={onClick} className={style.gameContainer}>
      <div className={style.gameImgContainer}>
        <Link to={"/leaderboard/" + gameLink}>
          <img className={style.gameImage} src={gameImg} alt={gameImgDesc} />
        </Link>
      </div>
      <div className={style.gameDescription}>
        <h3>{gameName}</h3>
        {showButton && (
          <div className={style.gameDescriptionLinkContainer}>
            <a href={gameId}>Start Game</a>
          </div>
        )}
      </div>
    </div>
  );
}

GameComponent.propTypes = {
  gameImg: PropTypes.string,
  gameImgDesc: PropTypes.string,
  gameName: PropTypes.string,
  gameId: PropTypes.string,
  onClick: PropTypes.func,
  gameLink: PropTypes.string,
  showButton: PropTypes.bool,
};

export default GameComponent;
