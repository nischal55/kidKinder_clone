import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AdminDash from "./AdminPages/AdminDash";
import AdminLogin from "./AdminPages/AdminLogin";
import TeacherMgmt from "./AdminPages/TeacherMgmt";
import Teachers from "./Components/Teachers";
import Teachersnav from "./Pages/Teachersnav";
import ClassNav from "./Pages/ClassNav";
import About from "./Pages/About";



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
        },
        {
          path:"AddTeachers",
          element:<TeacherMgmt/>
        }
      ]
    },
    {
      path:"Auth",
      element:<AdminLogin/>
    },
    {
      path:"tst",
      element:<Teachers/>
    },
    {
      path:"/Teachers",
      element:<Teachersnav/>
    },
    {
      path:"/Classes",
      element:<ClassNav/>
    },
    {
      path:"/About",
      element:<About/>
    },
    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
