import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoute";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import ProjectContainer from "../pages/projects/ProjectContainer";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to='/account/projects' replace /> },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to='/account/projects' replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: (
              <>
                Show project details <Outlet />
              </>
            ),
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to='../' replace /> },
                  {
                    path: "new",
                    element: <>Show Modal window to create a task</>,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <>Show Task Details</> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);
export default router;
