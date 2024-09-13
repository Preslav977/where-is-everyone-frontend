import { Link } from "react-router-dom";
import style from "./GameComponent.module.css";
import PropTypes from "prop-types";

function GameComponent({
  onClick,
  gameID,
  showLinkToLeaderBoard,
  gameImage,
  gameImageDescription,
  gameName,
  showButton,
  gameLink,
}) {
  return (
    <section onClick={onClick} className={style.gameContainer}>
      <div className={style.gameImgContainer}>
        {showLinkToLeaderBoard ? (
          <Link to={`/leaderboard/${gameID}`}>
            <img
              className={style.gameImage}
              src={gameImage}
              alt={gameImageDescription}
              aria-label="Show game leaderboard"
            />
          </Link>
        ) : (
          <img
            className={style.gameImage}
            src={gameImage}
            alt={gameImageDescription}
          />
        )}
      </div>
      <div className={style.gameDescription}>
        <h2>{gameName}</h2>
        {showButton && (
          <a className={style.gameDescriptionLinkContainer} href={gameLink}>
            <p data-testid="start-game">Start Game</p>
          </a>
        )}
      </div>
    </section>
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
  showLinkToLeaderBoard: PropTypes.bool,
};

export default GameComponent;
