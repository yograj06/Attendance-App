import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// Dashboards
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import AdminDashboard from "./components/AdminDashboard";

// Layouts
import StudentLayout from "./components/StudentLayout";
import TeacherLayout from "./components/TeacherLayout";
import AdminLayout from "./components/AdminLayout";

//Students
import StudentProfile from "./components/StudentProfile";
import StudentRegistration from "./components/StudentRegistration";
import StudentAttendance from "./components/StudentAttendance";

//Teachers
import TeacherRegistration from "./components/TeacherRegistration";
import TeacherProfile from "./components/TeacherProfile";
import TeacherAttendance from "./components/TeacherAttendance";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-gray-200 px-4">
              {/* Center Content */}
              <div className="grow grid place-items-center">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-4xl font-bold mt-6 text-center">
                    Welcome
                  </h1>

                  <h2 className="text-2xl text-gray-700 font-semibold text-center max-w-md mb-15">
                    Face Recognition Attendance System
                  </h2>

                  <Login />
                </div>
              </div>

              {/* Footer */}
              <footer className="text-center mt-30 mb-5 sm:mt-10 text-gray-800 text-xs sm:text-sm border-t border-gray-500 pt-4">
                © 2026 | Attendance App — All rights reserved • Made with ❤️ by
                Data Dynamos
              </footer>
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

          {/* 👇 ADD THESE */}
          <Route path="profile" element={<StudentProfile />} />
          <Route path="register" element={<StudentRegistration />} />
          <Route path="attendance" element={<StudentAttendance />} />
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
          <Route index element = {<TeacherDashboard />} />
          
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="register" element={<TeacherRegistration />} />
          <Route path="attendance" element={<TeacherAttendance />} />
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
  );
};

export default App;
