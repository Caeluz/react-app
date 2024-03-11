import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux
import Store from "./store/Store.tsx";
import { Provider } from "react-redux";

import ErrorPage from "./error-page.tsx";

import C367 from "./pages/C367.tsx";

import ToDoList from "./pages/ToDoList.tsx";

import Increment from "./pages/Increment.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/c367",
    // element: <Root />,
    element: <C367 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    // element: <ToDoList />,
    element: <Landing />,
  },
  {
    path: "/increment",
    // element: <Increment />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
