import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AdminDash from "./AdminPages/AdminDash";
import AdminLogin from "./AdminPages/AdminLogin";
import TeacherMgmt from "./AdminPages/TeacherMgmt";
import Teachersnav from "./Pages/Teachersnav";
import ClassNav from "./Pages/ClassNav";
import About from "./Pages/About";
import ClassReg from "./AdminPages/ClassReg";
import BlogsMgmt from "./AdminPages/BlogsMgmt";
import BlogSection from "./Components/BlogSection";
import BookingMgmt from "./AdminPages/BookingMgmt";



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
        },
        {
          path:"AddClasses",
          element:<ClassReg/>
        },
        {
          path:"BlogMgmt",
          element:<BlogsMgmt/>
        },
        {
          path:"Bookings",
          element:<BookingMgmt/>
        },

      ]
    },
    {
      path:"Auth",
      element:<AdminLogin/>
    },
    {
      path:"tst",
      element:<BlogSection/>
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
