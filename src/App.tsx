import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from "./components/ui/provider";
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// import { Provider } from "@/components/ui/provider"
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
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
    element: <SignUp />,
  },
]);

export default function App() {
  return (
    <Provider>
      {/* <ChakraProvider value={defaultSystem}> */}
      <RouterProvider router={router} />
      {/* </ChakraProvider> */}
    </Provider>
  );
}
