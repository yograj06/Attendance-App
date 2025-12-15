import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="grow p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center mt-6 mb-5 sm:mt-10 text-gray-800 text-xs sm:text-sm border-t border-gray-500 pt-4">
        © 2025 | Attendance App — All rights reserved • Made with ❤️ by Yograj
      </footer>

    </div>
  )
}

export default Layout
