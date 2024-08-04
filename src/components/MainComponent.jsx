import style from "./MainComponent.module.css";
import PropTypes from "prop-types";

function MainComponent({ gameImgSrc, gameImgDesc, children }) {
  return (
    <main className={style.mainContainer}>
      <img
        className={style.mainComponentImg}
        src={gameImgSrc}
        alt={gameImgDesc}
      />
      {children}
    </main>
  );
}

MainComponent.propTypes = {
  gameImgSrc: PropTypes.string,
  gameImgDesc: PropTypes.string,
};

export default MainComponent;
