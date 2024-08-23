import style from "./LeaderBoardTable.module.css";

function LeaderBoardTable({ children }) {
  return (
    <div className={style.a}>
      <table>
        <thead>
          <tr>
            <td>Place</td>
            <td>Username</td>
            <td>Score</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default LeaderBoardTable;
