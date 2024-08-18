import App from "../App";
import FetchGames from "../components/api/FetchGames";
import FetchSingleGame from "../components/api/FetchSingleGame";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FetchGames /> },
      {
        path: "/:id",
        element: <FetchSingleGame />,
      },
    ],
  },
];

export default routes;
