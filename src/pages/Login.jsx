import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <form>
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
                className='p-2 text-gray-800 rounded-sm'
            />
        </div>
        <button 
            type='submit'
            className="bg-slate-700 p-2 w-full hover:bg-slate-800"
        >
            Login
        </button>
        <Link
            to="/register"
            className='block mt-3'
        >
            Click to register
        </Link>
    </form>
  )
}

export default Login