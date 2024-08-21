import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchGames from "../components/api/FetchGames";
import FetchSingleGame from "../components/api/FetchSingleGame";
import FetchGameAndLeaderBoard from "../components/api/FetchGameAndLeaderBoard";

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
      },
      {
        path: "/leaderboard/:id",
        element: (
          <>
            <FetchGames />
            <FetchGameAndLeaderBoard />
          </>
        ),
      },
    ],
  },
]);

export default router;
