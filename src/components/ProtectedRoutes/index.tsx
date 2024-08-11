import { getAuth } from "firebase/auth";
import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FadeLoader } from "react-spinners";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (
  props
) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader
          color="#14f2ad"
          cssOverride={{}}
          loading
          speedMultiplier={2}
        />
      </div>
    );
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
