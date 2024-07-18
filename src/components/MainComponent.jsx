import style from "./MainComponent.module.css";
import PropTypes from "prop-types";

function MainComponent({ gameImgSrc, gameImgDesc }) {
  return (
    <main>
      <img
        className={style.mainComponentImg}
        src={gameImgSrc}
        alt={gameImgDesc}
      />
    </main>
  );
}

MainComponent.propTypes = {
  gameImgSrc: PropTypes.string,
  gameImgDesc: PropTypes.string,
};

export default MainComponent;
