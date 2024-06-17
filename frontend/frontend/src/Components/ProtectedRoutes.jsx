import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let user = useSelector((store) => store.user.value);

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
