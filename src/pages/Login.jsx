import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')
    const navigate = useNavigate()

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()
    
        try{
            const response = await signInWithEmailAndPassword(auth, email, password )
            resetForm()
            navigate('./account')
        }catch(error){
            console.log(error.message)
            setError(error.message)
        }
    
    }

    return (
        <form onSubmit={(e) => handleLogin(e)}>
            <h1 className='text-2xl font-bold pb-2'>Login form</h1>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 text-gray-800 rounded-sm'
                />
            </div>
            <div className="buttons flex flex-col gap-3">
                <button 
                    type='submit'
                    className="border-2 rounded-sm bg-slate-800 p-2 w-full hover:bg-slate-700"
                >
                    Login
                </button>
                <button 
                    type='button'
                    className="border-2 rounded-sm p-2 w-full hover:bg-slate-800 flex gap-2 justify-center items-center"
                >
                    <GoogleIcon />
                    Login with google
                </button>
            </div>
            <Link
                to="/register"
                className='block mt-3'
            >
                Click to register
            </Link>
            {
                (error != '') ? <div>{error}</div> : <div />
            }
        </form>
    )
}

export default Login