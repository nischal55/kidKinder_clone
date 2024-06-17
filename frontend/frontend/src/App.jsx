import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import AdminLogin from "./AdminPages/AdminLogin";
import AdminNav from "./Components/AdminNav";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/features",
      element: <AdminLogin/>,
    },
    {
      path: "/Dashboard",
      element: <AdminNav/>,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
