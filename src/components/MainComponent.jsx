import style from "./MainComponent.module.css";
import PropTypes from "prop-types";
import "../index.css";

function MainComponent({
  className,
  position,
  useRefProp,
  onLoad,
  onLoadTimer,
  gameImageSrc,
  gameImageDescription,
  children,
}) {
  return (
    <main className={className}>
      <section className={style.mainGameSectionWrapper}>
        <div className={style.mainGameContent} style={{ position: position }}>
          <img
            data-testid="main-img"
            ref={useRefProp}
            onLoad={() => {
              onLoad();
              onLoadTimer();
            }}
            className={style.mainComponentImg}
            src={gameImageSrc}
            alt={gameImageDescription}
          />
          {children}
        </div>
      </section>
      <div className={style.a}></div>
    </main>
  );
}

MainComponent.propTypes = {
  gameImageSrc: PropTypes.string,
  gameImageDescription: PropTypes.string,
  children: PropTypes.array,
  onLoad: PropTypes.func,
  onLoadTimer: PropTypes.func,
  className: PropTypes.string,
  position: PropTypes.string,
  useRefProp: PropTypes.object,
};

export default MainComponent;
