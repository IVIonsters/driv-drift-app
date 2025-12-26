import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Styles
import "./index.css";

// Pages
import DevelopmentPage from "./features/developmentpage/DevelopmentPage.jsx";
import HomePage from "./features/homepage/pages/HomePage.jsx";
import ErrorPage from "./features/errorpage/ErrorPage.jsx";
import MediaCorner from "./features/media/pages/MediaCorner.jsx";
import EventsPage from "./features/events/pages/EventsPage.jsx";
import DriverProfile from "./features/drivers/pages/DriverProfile.jsx";
import BracketPage from "./features/brackets/pages/BracketSystem.jsx";

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
