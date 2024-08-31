import style from "./MainComponent.module.css";
import PropTypes from "prop-types";

function MainComponent({
  gameImageSrc,
  gameImageDescription,
  onLoad,
  useRefProp,
  children,
  onLoadTimer,
  className,
  position,
}) {
  return (
    <main className={className}>
      <section className={style.mainGameSectionWrapper}>
        <div className={style.mainGameContent} style={{ position: position }}>
          <img
            ref={useRefProp}
            onLoad={onLoad}
            className={style.mainComponentImg}
            src={gameImageSrc}
            alt={gameImageDescription}
          />
          {children}
        </div>
      </section>
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
