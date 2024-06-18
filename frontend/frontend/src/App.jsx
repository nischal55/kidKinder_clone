import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AdminDash from "./AdminPages/AdminDash";
import AdminLogin from "./AdminPages/AdminLogin";
import Classes from "./Components/Classes";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Dashboard",
      element: <ProtectedRoutes/>,
      children:[
        {
          path:"",
          element:<AdminDash/>
        }
      ]
    },
    {
      path:"Auth",
      element:<AdminLogin/>
    },
    {
      path:"tst",
      element:<Classes/>
    }
    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
