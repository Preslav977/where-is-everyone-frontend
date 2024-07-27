import style from "./DropDownMenuContent.module.css";
import PropTypes from "prop-types";

function DropDownMenuContent({
  characterImgSrc,
  characterImgDesc,
  characterName,
}) {
  return (
    <div className={style.dropDownCharacterContainer}>
      <img
        className={style.dropDownCharacterImg}
        src={characterImgSrc}
        alt={characterImgDesc}
      />
      <p>{characterName}</p>
    </div>
  );
}

DropDownMenuContent.propTypes = {
  characterImgSrc: PropTypes.string,
  characterImgDesc: PropTypes.string,
  characterName: PropTypes.string,
};

export default DropDownMenuContent;