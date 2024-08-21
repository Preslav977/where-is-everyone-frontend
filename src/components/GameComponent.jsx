import style from "./GameComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameComponent({
  gameImg,
  gameImgDesc,
  gameName,
  gameId,
  gameButton,
  onClick,
  prop,
}) {
  return (
    <div className={style.gameContainer}>
      <div onClick={onClick} className={style.gameImgContainer}>
        <Link to={prop}>
          <img className={style.gameImage} src={gameImg} alt={gameImgDesc} />
        </Link>
      </div>
      <div className={style.gameDescription}>
        <h3>{gameName}</h3>
        <div className={style.gameDescriptionLinkContainer}>
          <Link to={gameId}>{gameButton}</Link>
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
  gameButton: PropTypes.string,
};

export default GameComponent;
