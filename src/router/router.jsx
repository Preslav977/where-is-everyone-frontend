import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchGames from "../components/api/FetchGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <FetchGames /> }],
  },
]);

export default router;
