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
import BlogSection from "./Components/BlogSection";
import BookingMgmt from "./AdminPages/BookingMgmt";
import NewsMgmt from "./AdminPages/NewsMgmt";
import ViewBlogs from "./AdminPages/ViewBlogs";
import JoinNow from "./Components/JoinNow";
import BlogsMgmt from "./AdminPages/BlogsMgmt";
import ViewEnrollments from "./AdminPages/ViewEnrollments";
import ViewTeachers from "./AdminPages/ViewTeachers";
import ViewClasses from "./AdminPages/ViewClasses";



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
          element:<ViewBlogs/>
        },
        {
          path:"Bookings",
          element:<BookingMgmt/>
        },
        {
          path:"newsLetters",
          element:<NewsMgmt/>
        },
        {
          path:"blogAdd",
          element:<BlogsMgmt/>
        },
        {
          path:"viewEnrollment",
          element:<ViewEnrollments/>
        },
        {
          path:"teachers",
          element:<ViewTeachers/>
        },
        {
          path:"classes",
          element:<ViewClasses/>
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
    {
      path:"/join/:slugClass",
      element:<JoinNow/>
    },

    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
