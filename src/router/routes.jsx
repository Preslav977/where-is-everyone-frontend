import App from "../App";
import FetchGames from "../components/api/FetchGames";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <FetchGames /> }],
  },
];

export default routes;
