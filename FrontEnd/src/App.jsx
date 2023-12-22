import './App.css'

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-white flex max-[1000px]:flex-col flex-row text-black p-8 max-[1000px]:gap-10 gap-20'>
        <div className='flex flex-col max-[1000px]:w-full w-1/2  justify-center'>
          <svg className='max-[1000px]:w-11 max-[1000px]:h-11 w-full h-3/5' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className='flex flex-col max-[1000px]:w-full place-self-center justify-center items-center my-5 gap-3 w-1/2'>
          <h1 className='max-md:text-4xl text-center text-6xl pb-5 font-bold'>Happening now</h1>
          <h3 className='max-md:text-xl text-3xl pb-3 font-bold'>Join today.</h3>
          <button className='border w-64 border-gray-300 font-semibold text-sm text-gray-600 rounded-full h-10 flex justify-center items-center gap-2'><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-5 h-5'><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></span>Sign up with Google</button>
          <button className='border w-64 border-gray-300 font-semibold text-sm text-black rounded-full h-10 flex justify-center items-center gap-2'><span><svg viewBox="0 0 24 24" aria-hidden="true" className='w-5 h-5'><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg></span>Sign up with Apple</button>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-28 h-[1px] bg-gray-200'></div>
            <div className='text-gray-800 text-center'>or</div>
            <div className='w-28 h-[1px] bg-gray-200'></div>
          </div>
          <button className='border w-64 font-semibold text-sm text-white bg-[#1D9BF0] rounded-full h-10'>Create account</button>
          <p className='text-xs text-center'>By signing up, you agree to the <span className='text-[#1D9BF0]'>Terms of Service</span> and <span className='text-[#1D9BF0]'>Privacy Policy</span>, including <span className='text-[#1D9BF0]'>Cookie Use</span>.</p>
          <h3 className='text-lg font-semibold'>Already have an account?</h3>
          <button className='border w-64 border-gray-300 font-semibold text-sm rounded-full text-[#1D9BF0] h-10'>Sign in</button>
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
    </>
  )
}

export default App
