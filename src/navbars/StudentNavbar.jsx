import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

const StudentNavbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-black text-white flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-lg font-semibold flex items-center gap-2"
        >
          ☰ Student Dashboard
        </button>

        <button
          onClick={logout}
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-5 border-b border-gray-700 text-lg font-bold">
          Student Menu
        </div>

        <nav className="flex flex-col p-4 gap-3">

          <NavLink
            to="/student"
            className={({ isActive }) =>
              `p-2 rounded transition ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              `p-2 rounded transition ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
            onClick={() => setOpen(false)}
          >
            Profile
          </NavLink>

          <NavLink
            to="/student/attendance"
            className={({ isActive }) =>
              `p-2 rounded transition ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
            onClick={() => setOpen(false)}
          >
            Attendance
          </NavLink>

          <button
            onClick={logout}
            className="text-left p-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  )
}

export default StudentNavbar
