import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import StudentDashboard from "./components/StudentDashboard"
import TeacherDashboard from "./components/TeacherDashboard"
import AdminDashboard from "./components/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-gray-200">

              {/* Center Content */}
              <div className="grow grid place-items-center">
                <div className="flex flex-col items-center gap-4">

                  <h1 className="text-4xl font-bold mt-6">
                    Welcome
                  </h1>

                  <h2 className="text-2xl text-gray-700 font-semibold text-center max-w-md mb-6">
                    Face Recognition Attendance System
                  </h2>

                  <Login />

                </div>
              </div>

              {/* Footer */}
              <footer className="text-center m-5 sm:mt-10 text-gray-800 text-xs sm:text-sm border-t border-gray-500 pt-4">
                © 2025 | Attendance App — All rights reserved • Made with ❤️ by Yograj
              </footer>

            </div>
          }
        />

        {/* Student Dashboard */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Teacher Dashboard */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
