const TeacherAttendance = () => {
  const profile = JSON.parse(localStorage.getItem("teacherProfile"))

  return (
    <div className="p-6 text-center">

      <h1 className="text-3xl font-bold mb-4">
        Teacher Attendance Panel
      </h1>
 
      {!profile ? (
        <p className="text-gray-700">
          Please complete your profile first to access attendance features.
        </p>
      ) : (
        <p className="text-gray-700">
          Attendance features coming soon...
        </p>
      )}

    </div>
  )
}

export default TeacherAttendance
