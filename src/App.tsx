import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { element: <AppLayout />, children: [{ path: "/", element: <Home /> }] },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
