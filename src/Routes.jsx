import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import DevHome from "./Pages/Dev/DevHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dev",
        element: <DevHome />,
      },
    ],
  },
]);

export default router;
