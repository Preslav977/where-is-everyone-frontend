import style from "./NavComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavComponent({
  gameTime,
  firstCharImg,
  firstCharImgDesc,
  firstCharName,
  secondCharImg,
  secondCharImgDesc,
  secondCharName,
  thirdCharImg,
  thirdCharImgDesc,
  thirdCharName,
  leaderBoardLink,
  visibilityStyle,
}) {
  return (
    <nav className={style.navContainer}>
      <button className={style.navContentHomeBtn}>
        <Link to="/">
          Character<span className={style.navLinkSpan}>Hunt</span>
        </Link>
      </button>
      <p className={style.navContentGameTime}>{gameTime}</p>
      <div className={style.navContentFlexCharWrapper}>
        <div
          className={style.navContentFlexCharContainer}
          style={{
            visibility: visibilityStyle,
          }}
        >
          <img
            className={style.navContentFlexCharImg}
            src={firstCharImg}
            alt={firstCharImgDesc}
          />
          <p className={style.navContentFlexCharName}>{firstCharName}</p>
        </div>
        <div
          className={style.navContentFlexCharContainer}
          style={{
            visibility: visibilityStyle,
          }}
        >
          <img
            className={style.navContentFlexCharImg}
            src={secondCharImg}
            alt={secondCharImgDesc}
          />
          <p className={style.navContentFlexCharName}>{secondCharName}</p>
        </div>
        <div
          className={style.navContentFlexCharContainer}
          style={{
            visibility: visibilityStyle,
          }}
        >
          <img
            className={style.navContentFlexCharImg}
            src={thirdCharImg}
            alt={thirdCharImgDesc}
          />
          <p className={style.navContentFlexCharName}>{thirdCharName}</p>
        </div>
      </div>
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
  firstCharImg: PropTypes.string,
  firstCharImgDesc: PropTypes.string,
  firstCharName: PropTypes.string,
  secondCharImg: PropTypes.string,
  secondCharImgDesc: PropTypes.string,
  secondCharName: PropTypes.string,
  thirdCharImg: PropTypes.string,
  thirdCharImgDesc: PropTypes.string,
  thirdCharName: PropTypes.string,
  leaderBoardLink: PropTypes.string,
  visibilityStyle: PropTypes.string,
};

export default NavComponent;
