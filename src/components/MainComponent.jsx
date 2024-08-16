import style from "./MainComponent.module.css";
import PropTypes from "prop-types";

function MainComponent({
  gameImgSrc,
  gameImgDesc,
  children,
  onLoad,
  onLoadTimer,
  className,
}) {
  return (
    <main className={className}>
      <img
        onLoad={() => {
          onLoad(), onLoadTimer();
        }}
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
  children: PropTypes.array,
  onLoad: PropTypes.func,
  onLoadTimer: PropTypes.func,
  className: PropTypes.string,
};

export default MainComponent;
