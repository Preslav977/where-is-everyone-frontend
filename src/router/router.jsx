import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchGames from "../components/api/FetchGames";
import FetchSingleGame from "../components/api/FetchSingleGame";
import LeaderBoardTable from "../components/api/LeaderBoardTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <FetchGames />,
      },
      {
        path: "/:id",
        element: <FetchSingleGame />,
      },
      {
        path: "/leaderboard",
        element: <FetchGames />,
        children: [
          {
            path: ":id",
            element: <LeaderBoardTable />,
          },
        ],
      },
    ],
  },
]);

export default router;
