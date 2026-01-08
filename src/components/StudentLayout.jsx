import { Outlet } from "react-router-dom";
import StudentNavbar from "../navbars/StudentNavbar";

const StudentLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Student Navbar */}
      <StudentNavbar />

      {/* Page Content */}
      <main className="grow">
        <Outlet />
      </main>
 
      {/* Sticky Footer */}
      <footer className="text-center text-gray-800 text-xs sm:text-sm border-t border-gray-300 py-4">
        © 2026 | Attendance App — All rights reserved • Made with ❤️ by Data
        Dynamos
      </footer>
    </div>
  );
};

export default StudentLayout;
