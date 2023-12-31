import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.tsx";

import C367 from "./pages/C367.tsx";

import ToDoList from "./pages/ToDoList.tsx";
import Problems from "./pages/Problems.tsx";

const router = createBrowserRouter([
  {
    path: "/c367",
    // element: <Root />,
    element: <C367 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <ToDoList />,
  },
  {
    path: "/problems",
    element: <Problems />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
