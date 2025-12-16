import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Styles
import "./index.css";

// Pages
import DevelopmentPage from "./pages/developmentPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MediaCorner from "./pages/MediaCorner.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import DriverProfile from "./pages/DriverProfile.jsx";
import BracketPage from "./pages/BracketSystem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DevelopmentPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/media",
    element: <MediaCorner />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/profile",
    element: <DriverProfile />,
  },
  {
    path: "/bracket",
    element: <BracketPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
