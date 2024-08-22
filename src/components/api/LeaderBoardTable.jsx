import style from "./LeaderBoard.module.css";

function LeaderBoardTable({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Username</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default LeaderBoardTable;
