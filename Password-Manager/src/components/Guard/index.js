import { useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import authContext from "../../context/AuthContext";

const AuthGuard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(authContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default AuthGuard;
