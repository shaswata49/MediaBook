import { getAuth } from "firebase/auth";
import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (
  props
) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <div>...Loading</div>;
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
