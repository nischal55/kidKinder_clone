import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let user = localStorage.getItem('username')

  if (!user) {
    return <Navigate to={"/Auth"} />;
  }

  return (
    <>
    
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
