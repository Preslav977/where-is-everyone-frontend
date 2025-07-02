import App from "../App";
import FetchGames from "../api/FetchGames";
import FetchSingleGame from "../api/FetchSingleGame";
import LeaderBoardTable from "../api/LeaderBoardTable";
// import { fetchSingleGameLoader } from "../components/api/FetchSingleGame";
import FetchGamesLeaderBoard from "../api/FetchGamesLeaderBoard";

const routes = [
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
        // loader: ({ params }) => fetchSingleGameLoader(params.id),
      },
      {
        path: "/leaderboard",
        element: <FetchGamesLeaderBoard />,
        children: [
          {
            path: ":id",
            element: <LeaderBoardTable />,
          },
        ],
      },
    ],
  },
];

export default routes;
