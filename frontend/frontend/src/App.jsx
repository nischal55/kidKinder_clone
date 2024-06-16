import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/features",
      element: <Footer/>,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
