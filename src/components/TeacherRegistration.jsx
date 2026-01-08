import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TeacherRegistration = () => {
  const navigate = useNavigate()

  // Get logged in user
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"))

  // Prefill
  const [name] = useState(storedUser?.name || "")
  const [email] = useState(storedUser?.email || "")

  const [department, setDepartment] = useState("")
  const [role, setRole] = useState("")
  const [teacherId, setTeacherId] = useState("")
  const [photo, setPhoto] = useState(null)

  const handleImageUpload = (file) => {
    setPhoto(URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!department || !role || !teacherId) {
      alert("Please fill all required fields")
      return
    }

    if (!photo) {
      alert("Please upload your photo")
      return
    }

    const profile = {
      name,
      email,
      department,
      role,
      teacherId,
      photo
    }

    localStorage.setItem("teacherProfile", JSON.stringify(profile))

    alert("Teacher Registration Completed Successfully")
    navigate("/teacher/profile")   // ← UPDATED HERE
  }

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl border border-gray-300"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Teacher Registration
        </h1>

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Name</label>
            <input
              className="p-3 border rounded bg-gray-100 w-full mt-1"
              value={name}
              disabled
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              className="p-3 border rounded bg-gray-100 w-full mt-1"
              value={email}
              disabled
            />
          </div>
        </div>

        {/* DEPARTMENT */}
        <div className="mt-6">
          <label className="font-semibold">Department</label>
          <select
            className="p-3 border rounded w-full mt-1 text-sm"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option>Computer Science & Engineering</option>
            <option>Electronics & Telecommunication Engineering</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Chemical Engineering</option>
            <option>Metallurgy & Materials</option>
            <option>Production Engineering</option>
            <option>Biomedical Engineering</option>
            <option>Other</option>
          </select>
        </div>

        {/* ROLE */}
        <div className="mt-4">
          <label className="font-semibold">Role</label>
          <select
            className="p-3 border rounded w-full mt-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option>Assistant Professor</option>
            <option>Associate Professor</option>
            <option>Professor</option>
            <option>Head of Department</option>
            <option>Dean</option>
            <option>Visiting Faculty</option>
          </select>
        </div>

        {/* TEACHER ID */}
        <div className="mt-4">
          <label className="font-semibold">Teacher ID</label>
          <input
            type="text"
            className="p-3 border rounded w-full mt-1"
            placeholder="Enter Teacher ID"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            required
          />
        </div>

        {/* PHOTO UPLOAD */}
        <div className="mt-6">
          <label className="font-semibold">Upload Your Photo</label>

          <label className="block border rounded-lg p-4 text-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition mt-2">
            {photo ? (
              <img
                src={photo}
                alt="teacher"
                className="w-full h-48 object-cover rounded"
              />
            ) : (
              <p>Click to Upload Image</p>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full mt-6 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default TeacherRegistration
 