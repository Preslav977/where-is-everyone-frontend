import App from "../App";
import FetchGames from "../components/api/FetchGames";
import FetchSingleGame from "../components/api/FetchSingleGame";
import LeaderBoardTable from "../components/api/LeaderBoardTable";
import { fetchSingleGameLoader } from "../components/api/FetchSingleGame";

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
        loader: ({ params }) => fetchSingleGameLoader(params.id),
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
];

export default routes;
