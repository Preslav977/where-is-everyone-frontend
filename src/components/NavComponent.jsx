import style from "./NavComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavComponent({ gameTime, leaderBoardLink, children }) {
  return (
    <nav className={style.navContainer}>
      <button className={style.navContentHomeBtn}>
        <a href="/">
          Character<span className={style.navLinkSpan}>Hunt</span>
        </a>
      </button>
      <p className={style.navContentGameTime}>{gameTime}</p>
      <div className={style.navContentFlexCharWrapper}>{children}</div>
      <div className={style.leaderBoardAndThemeBtnContainer}>
        <a href={leaderBoardLink}>Leaderboard</a>
        <div>
          <button>Btn</button>
        </div>
      </div>
    </nav>
  );
}

NavComponent.propTypes = {
  gameTime: PropTypes.string,
  leaderBoardLink: PropTypes.string,
  children: PropTypes.array,
};

export default NavComponent;
