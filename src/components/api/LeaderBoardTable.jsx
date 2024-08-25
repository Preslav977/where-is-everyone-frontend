import leaderboardStyle from "./LeaderBoardTable.module.css";
import PropTypes from "prop-types";

function LeaderBoardTable({ children }) {
  return (
    <div className={leaderboardStyle.tableContainer}>
      <table className={leaderboardStyle.table}>
        <thead className={leaderboardStyle.tableHead}>
          <tr>
            <td className={leaderboardStyle.tableCell}>Place</td>
            <td className={leaderboardStyle.tableCell}>Username</td>
            <td className={leaderboardStyle.tableCell}>Score</td>
            <td className={leaderboardStyle.tableCell}>Date</td>
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
