import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";
import VendorsPage from "./pages/VendorsPage";
import CategoriesPage from "./pages/CategoriesPage";

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/vendors", element: <VendorsPage /> },
      { path: "/categories", element: <CategoriesPage /> },
    ],
  },
  { path: "/login", element: <Auth type="login" key={"login"} /> },
  { path: "/signup", element: <Auth type="signup" key={"signup"} /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
