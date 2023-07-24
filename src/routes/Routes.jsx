import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegeDetails from "../pages/Shared/CollegeDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "/college/details/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://college-nest-server.vercel.app/colleges/${params.id}`),
      },
    ],
  },
]);

export default router;
