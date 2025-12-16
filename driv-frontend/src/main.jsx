import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Styles
import "./index.css";

// Pages
import DevelopmentPage from "./pages/developmentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DevelopmentPage />,
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
