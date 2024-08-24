import style from "./LeaderBoardTable.module.css";
import PropTypes from "prop-types";

function LeaderBoardTable({ children }) {
  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead className={style.tableHead}>
          <tr>
            <td className={style.tableCell}>Place</td>
            <td className={style.tableCell}>Username</td>
            <td className={style.tableCell}>Score</td>
            <td className={style.tableCell}>Date</td>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

LeaderBoardTable.propTypes = {
  children: PropTypes.array,
};

export default LeaderBoardTable;
