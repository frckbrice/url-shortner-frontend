import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage.jsx";
import ResultPage from "./resultPage.jsx";
import Redirect from "./Redirect.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api/shorturl",
    element: <ResultPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api/shorturl/:id",
    element: <Redirect />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={route} />
  </>
);
