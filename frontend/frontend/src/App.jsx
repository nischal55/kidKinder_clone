import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import AboutUs from "./Components/AboutUs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/features",
      element: <AboutUs/>,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
