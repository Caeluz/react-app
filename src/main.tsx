import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import TypesPrac from "./pages/TypesPrac.tsx";
import C367 from "./pages/C367.tsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element: <C367 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
