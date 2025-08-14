import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Don't redirect surgical users back to admin dashboard!
    // Redirect them to their proper dashboard instead
    if (user.role === 'surgical') {
      return <Navigate to="/surgicalDashboard" replace />;
    } else if (user.role === 'admin') {
      return <Navigate to="/dashboard" replace />;
    }
    // Fallback to login for unknown roles
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;