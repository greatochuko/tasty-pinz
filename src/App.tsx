import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
  { path: "/login", element: <Auth type="login" key={"login"} /> },
  { path: "/signup", element: <Auth type="signup" key={"signup"} /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
