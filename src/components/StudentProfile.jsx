import { useNavigate } from "react-router-dom"

const StudentProfile = () => {
  const navigate = useNavigate()
  const profile = JSON.parse(localStorage.getItem("studentProfile"))

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] px-4 ">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4">
            Student Profile
          </h2>

          <p className="text-gray-700 text-center mb-6">
            You have not completed your registration yet.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-2">
              Complete Your Profile
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Complete your registration to start using the system fully.
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

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl border">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Profile
        </h1>

        <div className="flex gap-6">
          <img
            src={profile.images[0]}
            className="w-40 h-40 object-cover rounded-full border"
          />

          <div>
            <p><b>Name:</b> {profile.name}</p>
            <p><b>Email:</b> {profile.email}</p>
            <p><b>Year:</b> {profile.year}</p>
            <p><b>Semester:</b> {profile.semester}</p>
            <p><b>Branch:</b> {profile.branch}</p>
            <p><b>Registration No:</b> {profile.regNo}</p>
            <p><b>Mobile:</b> {profile.mobile}</p>
          </div>
        </div>

        <h3 className="mt-6 font-bold">Stored Face Images</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {profile.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-40 object-cover rounded border"
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default StudentProfile
