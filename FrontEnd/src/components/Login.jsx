import React from 'react'

const Login = (props) => {
  return (
    <div className='w-full h-screen bg-stone-700 bg-opacity-50 flex justify-center items-center absolute top-0'>
      <form className='w-[45%] h-[90vh] rounded-2xl bg-white flex flex-col justify-center items-center'>
        <div className='w-full flex h-[10%] pt-2 px-3 gap-8 items-center'>
          <svg onClick={() => props.setShowLogin(false)} className='w-8 h-8 rounded-full cursor-pointer hover:bg-gray-200 p-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <svg className='w-8 h-8 grow pe-16' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className='w-[55%] px-5 pt-5 flex flex-col justify-start items-center h-[90%] overflow-y-auto gap-2'>
          <h2 className='w-full font-semibold text-3xl'>Sign in to X</h2>
          <button className='border w-full border-gray-300 my-4 font-semibold text-sm text-gray-600 hover:bg-gray-100 duration-200 rounded-full h-10 flex justify-center items-center gap-2'><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-5 h-5'><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></span>Sign up with Google</button>
          <button className='border w-full border-gray-300 font-semibold text-sm text-black hover:bg-gray-100 duration-200 rounded-full h-10 flex justify-center items-center gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></span>Sign up with GitHub</button>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-32 h-[1px] bg-gray-200'></div>
            <div className='text-gray-800 text-center'>or</div>
            <div className='w-32 h-[1px] bg-gray-200'></div>
          </div>
          <input className='border py-4 px-2 w-full rounded-md' type="text" placeholder='Phone, email, or username' />
          <button className='w-full border border-gray-300 rounded-full h-10 mt-6 bg-black text-white font-semibold py-1'>Next</button>
          <button className='w-full border border-gray-300 rounded-full h-10 mt-4 font-semibold hover:bg-gray-100 duration-200 py-1'>Forgot password?</button>
          <p className='my-5 text-gray-600'>Don't have an account? <span className='text-[#1D9BF0] hover:underline cursor-text'>Sign up</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login