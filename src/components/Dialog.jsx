import style from "./Dialog.module.css";
import PropTypes from "prop-types";

function Dialog({ playerScore, onSubmit }) {
  return (
    <div className={style.dialogContainer}>
      <dialog className={style.dialogContent} open>
        <form method="dialog" onSubmit={onSubmit}>
          <h3>You finished in {playerScore}!</h3>
          <p>Submit your score to the leaderboard</p>
          <div className={style.dialogFlexContainer}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              minLength={1}
              maxLength={30}
              required
            />
          </div>
          <div className={style.dialogSubmitBtnContainer}>
            <button>Submit</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

Dialog.propTypes = {
  playerScore: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Dialog;
