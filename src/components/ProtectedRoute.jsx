import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, role }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

  // ❌ Not logged in
  if (!loggedInUser) {
    return <Navigate to="/" replace />
  }

  // ❌ Logged in but wrong role
  if (role && loggedInUser.role !== role) {
    return <Navigate to="/" replace />
  }

  // ✅ Allowed
  return children
}

export default ProtectedRoute
