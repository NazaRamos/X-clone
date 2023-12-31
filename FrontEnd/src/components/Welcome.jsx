import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Welcome = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleRedirect = () => {
      setShowLogin(false);
      setShowRegister(true);
    }

  return (
    <main>
      <div className='w-full min-h-screen bg-white flex max-[1000px]:flex-col flex-row text-black p-8 max-[1000px]:gap-10 gap-20'>
        <div className='flex flex-col max-[1000px]:w-full w-1/2  justify-center'>
          <svg className='max-[1000px]:w-11 max-[1000px]:h-11 w-full h-3/5' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className='flex flex-col max-[1000px]:w-full place-self-center justify-center items-center my-5 gap-3 w-1/2'>
          <h1 className='max-md:text-4xl text-center text-6xl pb-5 font-bold'>Happening now</h1>
          <h3 className='max-md:text-xl text-3xl pb-3 font-bold'>Join today.</h3>
          <button className='border w-64 border-gray-300 font-semibold text-sm text-gray-600 hover:bg-gray-100 duration-200 rounded-full h-10 flex justify-center items-center gap-2'><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-5 h-5'><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></span>Sign up with Google</button>
          <button className='border w-64 border-gray-300 font-semibold text-sm text-black hover:bg-gray-100 duration-200 rounded-full h-10 flex justify-center items-center gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span>Sign up with GitHub</button>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-28 h-[1px] bg-gray-200'></div>
            <div className='text-gray-800 text-center'>or</div>
            <div className='w-28 h-[1px] bg-gray-200'></div>
          </div>
          <button onClick={() => setShowRegister(true)} className='border w-64 font-semibold text-sm text-white bg-[#1D9BF0] hover:bg-[#108CD8] duration-200 rounded-full h-10'>Create account</button>
          <p className='text-xs text-center'>By signing up, you agree to the <span className='text-[#1D9BF0]'>Terms of Service</span> and <span className='text-[#1D9BF0]'>Privacy Policy</span>, including <span className='text-[#1D9BF0]'>Cookie Use</span>.</p>
          <h3 className='text-lg font-semibold'>Already have an account?</h3>
          <button onClick={() => setShowLogin(true)} className='border w-64 border-gray-300 font-semibold text-sm rounded-full hover:bg-gray-100 duration-200 text-[#1D9BF0] h-10'>Sign in</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center p-5 text-gray-700 max-[1000px]:gap-2 gap-4 max-[1000px]:text-xs text-sm mt-10'>
        <p>About</p>
        <p>Download the X app</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Status</p>
        <p>Careers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>X for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>©2023 X Corp.</p>
      </div>
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && <Login handleRedirect={handleRedirect} setShowLogin={setShowLogin}/>}
    </main>
  )
}

export default Welcome