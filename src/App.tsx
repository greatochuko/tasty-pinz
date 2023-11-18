import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";
import VendorsPage from "./pages/VendorsPage";
import CategoriesPage from "./pages/CategoriesPage";
import VendorDetailPage from "./pages/VendorDetailPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrdersDetailPage";

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/vendors", element: <VendorsPage /> },
      { path: "/vendor/:vendorName", element: <VendorDetailPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/Orders", element: <OrdersPage /> },
      { path: "/Order/:orderId", element: <OrderDetailPage /> },
    ],
  },
  { path: "/login", element: <Auth type="login" key={"login"} /> },
  { path: "/signup", element: <Auth type="signup" key={"signup"} /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
