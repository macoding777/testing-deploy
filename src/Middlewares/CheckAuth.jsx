import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("username");
  return token ? (children ? children : <Outlet />) : <Navigate replace to={`/auth/login`} />;
};

export default ProtectedRoute;
