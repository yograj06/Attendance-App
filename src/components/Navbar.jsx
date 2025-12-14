import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("loggedInUser"))

  const logout = () => {
    localStorage.removeItem("loggedInUser")
    navigate("/")
  }

  return (
    <nav className="w-full h-14 bg-black text-white flex items-center justify-between px-6">
      
      {/* App name */}
      <h1 className="text-lg font-semibold">
        Attendance App
      </h1>

      {/* Right section */}
      <div className="flex items-center gap-6">
        <span className="capitalize">
          {user?.role}
        </span>

        <button
          onClick={logout}
          className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
