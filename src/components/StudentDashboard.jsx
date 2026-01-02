import { useNavigate } from "react-router-dom"

const StudentDashboard = () => {
  const navigate = useNavigate()

  const profile = JSON.parse(localStorage.getItem("studentProfile"))
  
  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  const userName = user?.name || "Student"

  // ---------------- IF STUDENT NOT REGISTERED ----------------
  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] px-4">
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
              Please complete your student registration to continue.
            </p>

            <button
              onClick={() => navigate("/student/register")}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Complete Registration
            </button>
          </div>

        </div>
      </div>
    )
  }

  // ---------------- IF STUDENT REGISTERED ----------------
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4 mt-15 mb-15">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-600">

        <h1 className="text-3xl font-bold text-center mb-4">
          Registration Completed
        </h1>

        <p className="text-gray-700 text-center mb-6">
          You can now access all student features.
        </p>

        {/* Profile Preview */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={profile.images?.[0]}
            className="w-28 h-28 rounded-full object-cover border"
            alt="student"
          />

          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.email}</p>

          <p className="text-sm text-gray-700">
            {profile.year} • {profile.semester} Semester
          </p>

          <p className="text-sm text-gray-700">
            {profile.branch}
          </p>

          <p className="text-sm text-gray-700">
            Reg No: {profile.regNo}
          </p>

          <p className="text-sm text-gray-700">
            Mobile: {profile.mobile}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/student/profile")}
            className="bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
          >
            View Profile
          </button>

          <button
            onClick={() => navigate("/student/attendance")}
            className="border border-black py-2 rounded-full hover:bg-gray-200 transition"
          >
            Check Attendance
          </button>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard


