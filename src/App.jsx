import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import StudentDashboard from "./components/StudentDashboard"
import TeacherDashboard from "./components/TeacherDashboard"
import AdminDashboard from "./components/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import StudentLayout from "./components/StudentLayout"
import TeacherLayout from "./components/TeacherLayout"
import AdminLayout from "./components/AdminLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-gray-200 px-4">
              <div className="grow grid place-items-center">
                <Login />
              </div>
            </div>
          }
        />

        {/* STUDENT ROUTES */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
        </Route>

        {/* TEACHER ROUTES */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<TeacherDashboard />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
