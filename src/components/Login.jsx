import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [isLoginMode, setIsLoginMode] = useState(true)
  const [role, setRole] = useState("student")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  // 🔹 SIGN UP
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const user = { name, email, password, role }
    localStorage.setItem("user", JSON.stringify(user))

    alert("Account created successfully")

    setIsLoginMode(true)
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  // 🔹 LOGIN
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (!storedUser) {
      alert("No account found. Please sign up first.")
      return
    }

    if (email === storedUser.email && password === storedUser.password) {

      alert("Login successful")
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser))

      if (storedUser.role === "student") navigate("/student")
      else if (storedUser.role === "teacher") navigate("/teacher")
      else if (storedUser.role === "admin") navigate("/admin")

    } else {
      alert("Invalid email or password")
    }
  }

  // 🔹 FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()
    isLoginMode ? handleLogin() : handleSignUp()
  }

  return (
    <div className="
      w-full
      max-w-95
      bg-white
      p-8
      sm:p-10
      rounded-2xl
      shadow-lg
      mx-auto

    ">

      {/* Header */}
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl font-semibold">
          {isLoginMode ? "Log in" : "Sign Up"}
        </h2>
      </div>

      {/* Tabs */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        <button
          type="button"
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 z-10 transition-all ${isLoginMode ? "text-white" : "text-black"}`}
        >
          Log in
        </button>

        <button
          type="button"
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 z-10 transition-all ${!isLoginMode ? "text-white" : "text-black"}`}
        >
          Sign Up
        </button>

        <div
          className={`absolute top-0 h-full w-1/2 bg-black rounded-full transition-all duration-300 ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        ></div>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>

        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none placeholder-gray-800"
          />
        )}

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 border-b-2 border-gray-300 bg-transparent outline-none"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border-b-2 border-gray-300 outline-none placeholder-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border-b-2 border-gray-300 outline-none placeholder-gray-800"
        />

        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none placeholder-gray-800"
          />
        )}

        <button className="w-full p-3 bg-black text-white rounded-full text-lg">
          {isLoginMode ? "Log in" : "Sign Up"}
        </button>

        <p className="text-center">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setIsLoginMode(!isLoginMode)
            }}
            className="font-semibold"
          >
            {isLoginMode ? " Sign Up" : " Log in"}
          </a>
        </p>

      </form>
    </div>
  )
}

export default Login
