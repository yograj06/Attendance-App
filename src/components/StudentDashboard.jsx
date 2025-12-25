import { useNavigate } from "react-router-dom"

const StudentDashboard = () => {
  const navigate = useNavigate()

  const profile = JSON.parse(localStorage.getItem("studentProfile"))

  // If profile NOT completed
  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] px-4">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-300">
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome Student
          </h2>

          <p className="text-gray-700 text-center mb-6">
            You have not completed your registration yet.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-2">
              Complete Your Profile
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Please complete your registration to use the system.
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

  // If profile IS completed
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border">

        <h1 className="text-3xl font-bold text-center mb-4">
          Registration Completed 🎉
        </h1>

        <p className="text-gray-700 text-center mb-6">
          You can now access all student features.
        </p>

        <div className="text-center">
          <button
            onClick={() => navigate("/student/attendance")}
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Check Attendance
          </button>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard
