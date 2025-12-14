import React, { useState } from 'react'

const Login = () => {

  const [isLoginMode, setIsLoginMode] = useState(true)
  return (


    <div className='w-\[430px\] bg-white p-8 rounded-2xl shadow-lg'>
      { /*header title*/}
      <div className='flex justify-center mb-4'>
        <h2 className='text-3xl font-semibold text-center'>
          {isLoginMode ? "Log in" : "Sign Up"}
        </h2>
      </div>



      {/*tab controls*/}
      <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
        <button onClick={() => setIsLoginMode(true)} className = {`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
          Log in
        </button>
        <button onClick={() => setIsLoginMode(false)} className = {`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode  ?"text-white" : "text-black"}`}>
          Sign Up
        </button>

        <div className= {`absolute top-0 h-full w-1/2 rounded-full bg-black ${isLoginMode ? "left-0" : "left-1/2"}`}></div>

      </div>

      {/*form section */}

      <form className='space-y-4'>
        {!isLoginMode && (
          <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-gray-700 placeholder-gray-600'/>
        )}

        {/*Shard input failed*/}
        <input type="email" placeholder='Email Address' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-gray-700 placeholder-gray-600'/>
        <input type="password" placeholder='Password' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-gray-700 placeholder-gray-600'/>

        {/*Signup failed*/}
        {!isLoginMode && (
          <input type="password" placeholder='Confirm Password' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-gray-700 placeholder-gray-600'/>
        )}

        {/*forget password for log in */}
        {isLoginMode && (
          <div className='text-center'><p className='text-black font-semibold hover:underline'>Forget Password</p></div>
        )}

        {/*Shared button*/}
        <button className='w-full p-3 bg-black text-white rounded-full text-lg font-medium'>
          {isLoginMode ? "Log in" : "Sign Up"}
        </button>

        {/**switch link */}
        <p className='text-center text-black'>{isLoginMode ? "Don't have an account" : "Already have an account "}
          <a href="#" onClick={() => setIsLoginMode(!isLoginMode)} className='text-black font-semibold hover:underline'>
            {isLoginMode ? " Sign Up now" : " Log in"} </a></p>



      </form>


    </div>
  )
}

export default Login
