import React, { useRef, useState } from 'react'
const Register = (props) => {

    const formRef = useRef(null)

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(formRef.current)
        const data = Object.fromEntries(dataForm)
        console.log(data)
        try {
            setLoading(true)
            await fetch('http://localhost:4000/api/sessions/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        setLoading(false)
                    } else {
                        setLoading(false)
                    }
                })
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className='w-full h-screen bg-stone-700 bg-opacity-50 flex justify-center items-center absolute top-0'>
            <form id="register" onSubmit={handleSubmit} ref={formRef} className='w-[45%] h-[90vh] rounded-2xl bg-white flex flex-col justify-center items-center'>
                <div className='w-full flex h-[10%] pt-2 px-5 gap-8 items-center'>
                    <svg onClick={() => props.setShowRegister(false)} className='w-8 h-8 rounded-full cursor-pointer hover:bg-gray-200 p-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <h3 className='text-black font-semibold text-xl'>Step 1 of 5</h3>
                </div>
                <div className='w-full px-20 pb-5 flex flex-col overflow-y-auto gap-8 h-[70%]'>
                    <h2 className='text-black text-4xl font-semibold'>Create your account</h2>
                    <input className='border py-4 px-2' type="text" name='name' required placeholder='Name' />
                    <input className='border py-4 px-2' type="email" name='email' required placeholder='Email' />
                    <input className='border py-4 px-2 text-black' type="password" name="password" id="password" placeholder='Password' required />
                    <p className='text-sm'><b className='w-full block text-lg'>Date of birth</b>
                        This will not be shown publicly. Confirm your own age, even if this account is for business, a pet, or something else.</p>
                    <div>
                        <input className='border px-2 py-2 text-gray-400' type="date" name="age" id="age" required />
                    </div>
                </div>
                <div className='w-full flex h-[20%] border-t border-gray-200 items-center justify-center'>
                    <button className='w-[75%] h-[50%] rounded-full bg-black bg-opacity-90 text-white text-lg font-bold'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default Register