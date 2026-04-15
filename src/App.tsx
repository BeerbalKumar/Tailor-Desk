import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from "./components/ui/provider";
import { Outlet, Navigate } from "react-router";
import { Flex, Box } from "@chakra-ui/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

// components
import { Sidebar } from "./components/layout";

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? (
    <Flex h="100vh" overflow="hidden">
      <Sidebar />
      <Box flex={1} overflowY="auto" bg="gray.50" p={6}>
        <Outlet />
      </Box>
    </Flex>
  ) : (
    <Navigate to="/login" replace />
  );
}

// Redirects logged-in users away from login/signup
function PublicOnlyRoute() {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <SignUp /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}
