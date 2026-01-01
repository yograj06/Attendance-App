import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentRegistration = () => {
  const navigate = useNavigate();

  // Get logged in user
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Prefill name + email
  const [name] = useState(storedUser?.name || "");
  const [email] = useState(storedUser?.email || "");

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [regNo, setRegNo] = useState("");
  const [mobile, setMobile] = useState("");

  const [images, setImages] = useState([null, null, null]);

  const handleImageUpload = (file, index) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!year || !semester || !branch || !regNo || !mobile) {
      alert("Please fill all details");
      return;
    }

    if (!images[0] || !images[1] || !images[2]) {
      alert("Please upload all 3 face images");
      return;
    }

    const profile = {
      name,
      email,
      year,
      semester,
      branch,
      regNo,
      mobile,
      images,
    };

    localStorage.setItem("studentProfile", JSON.stringify(profile));

    alert("Registration Completed Successfully");
    navigate("/student/profile");
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl border border-gray-300"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Student Registration
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

        {/* YEAR + SEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="font-semibold">Year</label>
            <select
              className="p-3 border rounded w-full mt-1"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Pre Final Year</option>
              <option>Final Year</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Semester</label>
            <select
              className="p-3 border rounded w-full mt-1"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="">Select Semester</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
            </select>
          </div>
        </div>

        {/* OTHER DETAILS */}

       

        <div className="mt-6 space-y-5">
          <div>
            <label className="font-semibold">Branch</label>
            <select
             className="p-3 border rounded w-full mt-1 
               sm:text-sm md:text-base 
               leading-tight 
               overflow-hidden truncate"
             value = {branch}
             onChange={(e) => setBranch(e.target.value)}
             required 
            >
              <option value="">Select branch</option>
              <option>Computer Science & Engineering</option>
              <option>Computer Science and Engineering Specialization in Artificial Intelligence and Machine Learning</option>
              <option>Electronics & Telecommunication Engineering</option>
              <option>Electrical & Electronics Engineering</option>
              <option>Biomedical Engineering</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering (ME)</option>
              <option>Mechanical and Smart Manufacturing</option>
              <option>Civil Engineering</option>
              <option>Metallurgy & Materials Engineering</option>
              <option>Production Engineering</option>
              <option>Chemical Engineering</option>
              <option>Safety and Fire Engineering</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Registration Number</label>
            <input
              type="text"
              className="p-3 border rounded w-full mt-1"
              placeholder="Registration Number"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Mobile Number</label>
            <input
              type="text"
              className="p-3 border rounded w-full mt-1"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </div>

        {/* NOTE */}
        <p className="mt-6 p-3 bg-yellow-100 border border-yellow-400 rounded text-sm">
          <b>Note:</b> Upload 3 images of your face. If you wear glasses,
          upload both with & without glasses.
        </p>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[0, 1, 2].map((i) => (
            <label
              key={i}
              className="border rounded-lg p-4 text-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
            >
              {images[i] ? (
                <img
                  src={images[i]}
                  alt="face"
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <p>Upload Face Image {i + 1}</p>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e.target.files[0], i)}
              />
            </label>
          ))}
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
  );
};

export default StudentRegistration;
