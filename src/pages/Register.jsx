import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"
import { useNavigate } from 'react-router-dom'

function Register() {

    const [ email, setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ error, setError ] = useState('')
    const navigate = useNavigate()

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            resetForm()
            navigate('/account')
        }catch(error){
            console.log(error.message)
            setError(error.message)
        }

    }

    return (
        <form onSubmit={e=>handleFormSubmit(e)}>
            <h1 className='text-2xl font-bold pb-2'>Register form</h1>
            <div className='flex flex-col pb-3'>
                <label 
                    htmlFor="email"
                    className='text-xs font-bold pb-1'
                >
                    Email
                </label>
                <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    placeholder='Enter email' 
                    onChange={e=>setEmail(e.target.value)}
                    className='p-2 text-gray-800 rounded-sm'
                />
            </div>
            <div className='flex flex-col pb-3'>
                <label 
                    htmlFor="password"
                    className='text-xs font-bold pb-1'
                >
                    Password
                </label>
                <input 
                    type="password" 
                    id='password' 
                    name='password' 
                    onChange={e=>setPassword(e.target.value)}
                    className='p-2 text-gray-800 rounded-sm'
                />
            </div>
            <div className='flex flex-col pb-3'>
                <label 
                    htmlFor="confirm_password"
                    className='text-xs font-bold pb-1'
                >
                    Confirm Password
                </label>
                <input 
                    type="password" 
                    id='confirm_password' 
                    name='confirm_password' 
                    className='p-2 text-gray-800 rounded-sm'
                />
            </div>
            <button 
                type='submit'
                className="border-2 rounded-sm bg-slate-700 p-2 w-full hover:bg-slate-800"
            >
                Register
            </button>
            <Link
                to="/"
                className='block mt-3'
            >
                Click to login
            </Link>
            {
                (error != '') ? <div>{error}</div> : <div />
            }
        </form>
    )
}

export default Register