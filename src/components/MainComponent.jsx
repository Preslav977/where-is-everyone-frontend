import style from "./MainComponent.module.css";
import PropTypes from "prop-types";

function MainComponent({
  gameImgSrc,
  gameImgDesc,
  children,
  onLoad,
  onLoadTimer,
  className,
  position,
  prop,
}) {
  return (
    <main className={className}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          // backgroundColor: "#0b0d22",
        }}
      >
        <div style={{ position: position, backgroundColor: "#0b0d22" }}>
          <img
            ref={prop}
            onLoad={() => {
              onLoad(), onLoadTimer();
            }}
            className={style.mainComponentImg}
            src={gameImgSrc}
            alt={gameImgDesc}
          />
          {children}
        </div>
      </div>
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
  position: PropTypes.string,
};

export default MainComponent;
