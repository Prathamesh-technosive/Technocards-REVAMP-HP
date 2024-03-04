import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signUp";
import Dashboard from "../pages/views/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
