import { useNavigate } from "react-router-dom"

const TeacherProfile = () => {
  const navigate = useNavigate()

  const profile = JSON.parse(localStorage.getItem("teacherProfile"))

  // If NOT registered
  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] px-4 mt-15">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-300">

          <h2 className="text-2xl font-bold text-center mb-4">
            Teacher Profile
          </h2>

          <p className="text-gray-700 text-center mb-6">
            You have not completed your registration yet.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-2">
              Complete Your Profile
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Please complete your registration to continue.
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

  // If registered
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4 mt-15 mb-15">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl border">

        <h1 className="text-3xl font-bold text-center mb-6">
          Teacher Profile
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-center">

          {/* Photo */}
          <div className="w-40 h-40 border rounded overflow-hidden">
            <img
              src={profile.photo}
              alt="Teacher"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-2 w-full">
            <p><b>Name:</b> {profile.name}</p>
            <p><b>Email:</b> {profile.email}</p>
            <p><b>Department:</b> {profile.department}</p>
            <p><b>Role:</b> {profile.role}</p>
            <p><b>Teacher ID:</b> {profile.teacherId}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TeacherProfile
