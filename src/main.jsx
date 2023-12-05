import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./pages/about us/aboutUs.jsx";
import Home from "./pages/home/home.jsx";
import Awards from "./pages/awards/awards.jsx";
import Events from "./pages/events/events.jsx";
import Sponsorship from "./pages/sponsorship/Sponsorship.jsx";
import Contact from "./pages/contact/contact.jsx";
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
  {
    path: "/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
