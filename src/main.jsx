import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./pages/aboutUs.jsx";
import Home from "./pages/home.jsx";
import Awards from "./pages/awards.jsx";
import Events from "./pages/events.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },
  {
    path: "/events",
    element: <Events />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
