import style from "./GameComponent.module.css";
import PropTypes from "prop-types";

function GameComponent({ gameImg, gameImgDesc, gameName, gameId }) {
  return (
    <div className={style.gameContainer}>
      <div className={style.gameImgContainer}>
        <img className={style.gameImage} src={gameImg} alt={gameImgDesc} />
      </div>
      <div className={style.gameDescription}>
        <h3>{gameName}</h3>
        <div className={style.gameDescriptionLinkContainer}>
          <a href={gameId}>Start Game</a>
        </div>
      </div>
    </div>
  );
}

GameComponent.propTypes = {
  gameImg: PropTypes.string,
  gameImgDesc: PropTypes.string,
  gameName: PropTypes.string,
  gameId: PropTypes.string,
};

export default GameComponent;
