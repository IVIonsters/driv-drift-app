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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
