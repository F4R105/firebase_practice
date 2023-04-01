import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <form>
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
    <div className='flex flex-col pb-3'>
        <label 
            htmlFor="password"
            className='text-xs font-bold pb-1'
        >
            Confirm Password
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
</form>
  )
}

export default Register