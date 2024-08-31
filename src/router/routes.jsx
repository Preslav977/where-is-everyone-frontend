import App from "../App";
import FetchGames from "../components/api/FetchGames";
import FetchSingleGame from "../components/api/FetchSingleGame";
import LeaderBoardTable from "../components/api/LeaderBoardTable";
import { fetchSingleGameCharactersLoader } from "../components/api/FetchSingleGame";

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
        loader: ({ params }) => fetchSingleGameCharactersLoader(params.id),
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
