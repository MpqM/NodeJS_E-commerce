import { Navigate, Route, RouteProps } from "react-router-dom";
import { AuthState } from "./redux/auth/authSlice";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  isAuthenticated: AuthState['isAuthenticated'];
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
