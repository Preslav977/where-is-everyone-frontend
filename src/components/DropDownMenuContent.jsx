import style from "./DropDownMenuContent.module.css";
import PropTypes from "prop-types";

function DropDownMenuContent({
  characterImageSrc,
  characterImageDescription,
  characterName,
  onClick,
}) {
  return (
    <section
      data-testid="drop-down-characters"
      onClick={onClick}
      className={style.dropDownCharacterContainer}
    >
      <img
        className={style.dropDownCharacterImg}
        src={characterImageSrc}
        alt={characterImageDescription}
      />
      <p>{characterName}</p>
    </section>
  );
}

DropDownMenuContent.propTypes = {
  characterImageSrc: PropTypes.string,
  characterImageDescription: PropTypes.string,
  characterName: PropTypes.string,
  onClick: PropTypes.func,
};

export default DropDownMenuContent;
