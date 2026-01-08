import { useNavigate } from "react-router-dom"

const TeacherDashboard = () => {
  const navigate = useNavigate()

  // Get teacher profile
  const profile = JSON.parse(localStorage.getItem("teacherProfile"))

  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  const userName = user?.name || "Teacher"
 
  // ---------------- IF NOT REGISTERED ----------------
  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] px-4 mt-12">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-700">

          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome {userName}
          </h2>

          <p className="text-gray-700 text-center mb-6">
            You have not completed your registration yet.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-2">
              Complete Your Profile
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Please complete your teacher registration to continue.
            </p>

            <button
              onClick={() => navigate("/teacher/register")}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Complete Registration
            </button>
          </div>

        </div>
      </div>
    )
  }

  // ---------------- IF ALREADY REGISTERED ----------------
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4 mt-15 mb-15">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-300">

        <h1 className="text-3xl font-bold text-center mb-4">
          Registration Completed 
        </h1>

        <p className="text-gray-700 text-center mb-6">
          You can now access all teacher features.
        </p>

        {/* Profile Preview */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={profile.photo}
            className="w-28 h-28 rounded-full object-cover border"
            alt="teacher"
          />

          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.email}</p>
          <p className="text-sm text-gray-700">
            {profile.department} • {profile.role}
          </p>
          <p className="text-sm text-gray-700">
            Teacher ID: {profile.teacherId}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/teacher/profile")}
            className="bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
          >
            View Profile
          </button>

          <button
            onClick={() => navigate("/teacher/attendance")}
            className="border border-black py-2 rounded-full hover:bg-gray-200 transition"
          >
            Go To Attendance
          </button>
        </div>

      </div>
    </div>
  )
}

export default TeacherDashboard
